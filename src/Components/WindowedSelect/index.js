'use client';

import React, {
  useMemo,
  memo,
  useState,
  useEffect,
  useCallback,
  useDeferredValue,
} from 'react';
import Select from 'react-select';
import Fuse from 'fuse.js';
import { useDebouncedCallback } from 'use-debounce';
import { calculateWeights } from '@/utils';
import { CustomMenuList } from '../index';

const WindowedSelect = ({
  windowThreshold = 100,
  searchKeys = ['label'],
  ...passedProps
}) => {
  const [_inputValue, setInputValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(passedProps.options);
  const inputValue = useDeferredValue(_inputValue);

  const normalizedOptions = useMemo(() => {
    if (!passedProps.options || !searchKeys.length) return [];
    return passedProps.options.map((item, idx) => {
      const norm = { __origIndex: idx, __item: item };
      for (const key of searchKeys) {
        const val = item[key] == null ? '' : String(item[key]);
        norm[key] = val;
        norm[`${key}__lower`] = val.toLowerCase();
      }
      return norm;
    });
  }, [passedProps.options, searchKeys]);

  const weights = useMemo(() => calculateWeights(searchKeys), [searchKeys]);

  const fuse = useMemo(() => {
    if (!searchKeys.length || !passedProps.options) return null;
    const fuseOptions = {
      keys: searchKeys.map((key) => ({ name: key, weight: weights[key] })),
      includeScore: true,
      threshold: 0.4,
      minMatchCharLength: 1,
      ignoreLocation: true,
    };
    return new Fuse(passedProps.options, fuseOptions);
  }, [passedProps.options, searchKeys, weights]);

  const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const debouncedSearch = useDebouncedCallback((value) => {
    if (!value || !value.trim()) {
      setFilteredOptions(passedProps.options || []);
      return;
    }

    const trimmed = value.trim();
    const tokens = trimmed.split(/\s+/).filter(Boolean);
    if (tokens.length === 0) {
      setFilteredOptions(passedProps.options || []);
      return;
    }

    if (trimmed.length <= 2) {
      const lower = trimmed.toLowerCase();
      const filtered = passedProps.options.filter((option) =>
        searchKeys.some((key) => {
          const fv =
            option[key] == null ? '' : String(option[key]).toLowerCase();
          return fv.includes(lower);
        }),
      );
      setFilteredOptions(filtered);
      return;
    }

    const exactMatchesMap = new Map();
    const PHRASE_BOOST_MULTIPLIER = 10;

    const tokensLower = tokens.map((t) => t.toLowerCase());
    const phraseLower = trimmed.toLowerCase();
    const phraseRegex = new RegExp(`\\b${escapeRegExp(phraseLower)}\\b`, 'i');

    for (const norm of normalizedOptions) {
      let exactScore = 0;
      const matchedKeys = new Set();

      for (const key of searchKeys) {
        const fieldLower = norm[`${key}__lower`] || '';

        let matchedTokenCount = 0;
        for (const t of tokensLower) {
          const re = new RegExp(`\\b${escapeRegExp(t)}\\b`, 'i');
          if (re.test(fieldLower)) matchedTokenCount += 1;
        }

        if (matchedTokenCount > 0) {
          exactScore += (weights[key] ?? 0) * matchedTokenCount;
          matchedKeys.add(key);

          if (phraseRegex.test(fieldLower)) {
            exactScore +=
              (weights[key] ?? 0) *
              tokensLower.length *
              PHRASE_BOOST_MULTIPLIER;
          }
        }
      }

      if (exactScore > 0) {
        const item = norm.__item;
        exactMatchesMap.set(item, { item, exactScore, matchedKeys });
      }
    }

    let fuseResults = [];
    if (fuse) {
      const extendedQuery = {
        $and: tokens.map((tok) => ({
          $or: searchKeys.map((key) => ({ [key]: tok })),
        })),
      };
      fuseResults = fuse
        .search(extendedQuery)
        .map((r) => ({ item: r.item, score: r.score ?? Infinity }));
    } else {
      fuseResults = passedProps.options.map((it) => ({
        item: it,
        score: Infinity,
      }));
    }

    const exactMatches = [];
    const fuzzyOnly = [];
    const seen = new Set();

    for (const { item, score } of fuseResults) {
      if (exactMatchesMap.has(item)) {
        const meta = exactMatchesMap.get(item);
        exactMatches.push({ item, exactScore: meta.exactScore, score });
        seen.add(item);
      } else {
        fuzzyOnly.push({ item, score });
        seen.add(item);
      }
    }

    for (const { item, exactScore } of exactMatchesMap.values()) {
      if (!seen.has(item)) {
        exactMatches.push({ item, exactScore, score: Infinity });
        seen.add(item);
      }
    }

    exactMatches.sort((a, b) => {
      if (b.exactScore !== a.exactScore) return b.exactScore - a.exactScore;
      if (a.score !== b.score)
        return (
          (a.score === undefined ? 1 : a.score) -
          (b.score === undefined ? 1 : b.score)
        );
      return 0;
    });

    fuzzyOnly.sort((a, b) => {
      if (a.score === b.score) return 0;
      if (a.score === undefined) return 1;
      if (b.score === undefined) return -1;
      return a.score - b.score;
    });

    const final = [
      ...exactMatches.map((x) => x.item),
      ...fuzzyOnly.map((x) => x.item),
    ];

    setFilteredOptions(final);
  }, 300);

  useEffect(() => {
    debouncedSearch(inputValue);
  }, [inputValue, debouncedSearch]);

  useEffect(() => {
    setFilteredOptions(passedProps.options);
  }, [passedProps.options]);

  const handleInputChange = useCallback(
    (newValue, actionMeta) => {
      setInputValue(newValue);
      passedProps.onInputChange?.(newValue, actionMeta);
    },
    [passedProps.onInputChange],
  );

  const isWindowed = useMemo(
    () => passedProps.options.length >= windowThreshold,
    [passedProps.options.length, windowThreshold],
  );

  return (
    <Select
      {...passedProps}
      options={filteredOptions}
      inputValue={_inputValue}
      onInputChange={handleInputChange}
      components={{
        ...passedProps.components,
        ...(isWindowed ? { MenuList: CustomMenuList } : {}),
      }}
      filterOption={null}
    />
  );
};

export default memo(WindowedSelect);
