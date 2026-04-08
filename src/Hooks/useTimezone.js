import { useState, useEffect, useCallback } from 'react';
import moment from 'moment-timezone';
import timezones from '@/generated/timezones';
import { getAbbrevKey } from '@/utils';

const guessedZone = moment.tz.guess();
const timezoneEntries = Object.entries(timezones);
const validTypes = new Set(['city', 'name', 'abbreviation']);

const sortByLabel = (list, key) =>
  list.sort((a, b) => (a[key] || '').localeCompare(b[key] || ''));

const precomputedLists = (() => {
  const city = [];
  const name = [];
  const abbreviation = [];
  const seenAbbreviation = new Set();

  for (const [timezone, tz] of timezoneEntries) {
    const { cities = [], ...restTZ } = tz;
    const identifiers = restTZ.identifiers || [];
    const isGuessCurrent = identifiers.includes(guessedZone);
    const baseObj = { timezone, ...restTZ };

    name.push({ ...baseObj, type: 'name', isCurrent: timezone === guessedZone });

    const abbrevKey = getAbbrevKey(tz);
    if (!seenAbbreviation.has(abbrevKey) && tz.standardAbbreviation) {
      seenAbbreviation.add(abbrevKey);
      abbreviation.push({
        ...baseObj,
        type: 'abbreviation',
        isCurrent: isGuessCurrent,
      });
    }

    if (cities.length) {
      for (const c of cities) {
        const cityData = { province: c.province, city: c.city };

        if (c.iso2 && c.iso2 !== baseObj.countryCode && !Number.isFinite(c.iso2)) {
          cityData.countryName = c.country;
          cityData.countryCode = c.iso2;
        }

        city.push({
          ...baseObj,
          ...cityData,
          type: 'city',
          isCurrent: isGuessCurrent,
        });
      }
    }
  }

  return {
    city: sortByLabel(city, 'city'),
    name: sortByLabel(name, 'timezone'),
    abbreviation: sortByLabel(abbreviation, 'standardAbbreviation'),
  };
})();

const cityListCache = new Map();

const getCityListForUser = (userCity) => {
  const cacheKey =
    userCity === -1 || userCity === -2 || userCity == null
      ? '__guess__'
      : String(userCity);

  const cachedList = cityListCache.get(cacheKey);
  if (cachedList) return cachedList;

  if (cacheKey === '__guess__') {
    cityListCache.set(cacheKey, precomputedLists.city);
    return precomputedLists.city;
  }

  const list = precomputedLists.city.map((tz) => ({
    ...tz,
    isCurrent: tz.city === userCity,
  }));

  cityListCache.set(cacheKey, list);
  return list;
};

const getCurrentByType = (type, userCity) => {
  const list =
    type === 'city' ? getCityListForUser(userCity) : (precomputedLists[type] ?? []);
  return list.find((item) => item.isCurrent) || null;
};

const useTimezone = () => {
  const [userCity, setUserCity] = useState(-1);

  useEffect(() => {
    let isMounted = true;

    const initUserCity = async () => {
      let city = -2;

      try {
        const res = await fetch('/api/get-user-city', {
          method: 'GET',
          credentials: 'same-origin',
        });

        if (res.ok) {
          const data = await res.json();
          if (data.city) {
            city = data.city;
          }
        }
      } catch (err) {
        console.error('Failed to get user city:', err);
      } finally {
        if (isMounted) {
          setUserCity(city);
        }
      }
    };

    initUserCity();

    return () => {
      isMounted = false;
    };
  }, []);

  const timeNow = useCallback(() => moment().format('YYYY-MM-DD HH:mm:ss'), []);

  const timeNowTZ = useCallback(
    (tz) => (tz ? moment.tz(tz).format('YYYY-MM-DD HH:mm:ss') : timeNow()),
    [timeNow],
  );

  const getTZList = useCallback(
    (value) => {
      const type = validTypes.has(value) ? value : 'city';
      if (type === 'city') {
        return getCityListForUser(userCity);
      }
      return precomputedLists[type];
    },
    [userCity],
  );

  const getCurrentTZData = useCallback(
    (type) => {
      const safeType = validTypes.has(type) ? type : 'city';
      return getCurrentByType(safeType, userCity);
    },
    [userCity],
  );

  return {
    timeNow,
    timeNowTZ,
    getTZList,
    getCurrentTZData,
    userCity,
  };
};

export default useTimezone;
