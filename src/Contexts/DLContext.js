'use client';

import {
  createContext,
  use,
  useMemo,
  memo,
  useEffect,
  useCallback,
} from 'react';
import { toast } from 'react-toastify';
import { useQueryParamsWithHistory } from '@/Hooks';
import {
  checkFields,
  convertToCSV,
  convertToExcel,
  countryOptions,
  getTZList,
  fileTypeOptions,
  offsetOptions,
  timezoneSheetHeaders,
} from '@/utils';

const DLContext = createContext();
export const useDL = () => use(DLContext);

const DLProvider = ({ children, initialQueryString }) => {
  const { updateSearchParam, queryString, queryObj } =
    useQueryParamsWithHistory(initialQueryString);

  const {
    isLoading,
    isReset,
    redirected,
    offsetIn,
    fileType,
    countries,
    country,
    fieldChecks,
  } = useMemo(() => {
    const sp = new URLSearchParams(queryString);

    const isLoading = sp.get('isLoading') === 'true';
    const isReset = sp.get('reset') === 'true';
    const redirected = sp.get('redirected') === 'true';

    const offsetIn = sp.get('offsetIn') || offsetOptions[0];

    const fileTypeValue = sp.get('fileType');
    const fileType =
      fileTypeOptions.find((opt) => opt.value === fileTypeValue) ||
      fileTypeOptions[0];

    const countries = sp.get('country') ? sp.get('country').split(',') : [];

    const countryList = countryOptions.filter((c) =>
      countries.includes(c.value),
    );
    const country = countryList.length > 0 ? countryList : null;

    const fieldChecks = checkFields.reduce((acc, field) => {
      acc[field] = sp.get(field) === 'true';
      return acc;
    }, {});

    return {
      isLoading,
      isReset,
      redirected,
      offsetIn,
      fileType,
      countries,
      country,
      fieldChecks,
    };
  }, [queryString]);

  const handleFileType = useCallback(
    (option) => {
      updateSearchParam({
        fileType: option?.value || '',
      });
    },
    [updateSearchParam],
  );

  const handleCountry = useCallback(
    (value) => {
      updateSearchParam({
        country: value ? value.map((v) => v.value).join(',') : '',
      });
    },
    [updateSearchParam],
  );

  const handleFieldCheck = useCallback(
    (name) => {
      updateSearchParam({ [name]: !fieldChecks[name] || '' });
    },
    [updateSearchParam, fieldChecks],
  );

  const downloadList = useCallback(() => {
    updateSearchParam({ isLoading: true });

    setTimeout(async () => {
      try {
        const timezones = getTZList({ fieldChecks, countries, offsetIn });

        const selectedFields = (() => {
          const fields = checkFields.filter((field) => fieldChecks[field]);

          if (
            fields.includes('upcomingDSTChange') &&
            !fields.includes('upcomingDSTChangeAt')
          ) {
            fields.push('upcomingDSTChangeAt');
          }

          return fields;
        })();

        if (!selectedFields.length) {
          toast('Please select at least one field to download.');
          return;
        }

        const selectedHeaders = selectedFields.map(
          (field) => timezoneSheetHeaders[field],
        );

        const data = timezones.map((tz) =>
          Object.fromEntries(selectedFields.map((field) => [field, tz[field]])),
        );

        const datePart = new Date().toISOString().slice(0, 10);
        const baseName = `timezone-list-${datePart}`;
        const link = document.createElement('a');
        let blob, fileName;

        if (fileType.value === 'csv') {
          const csv = convertToCSV(data, selectedFields, selectedHeaders);
          blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
          fileName = `${baseName}.csv`;
        } else if (fileType.value === 'excel') {
          blob = await convertToExcel(data, selectedFields, selectedHeaders);
          fileName = `${baseName}.xlsx`;
        } else {
          const jsonStr = JSON.stringify(data, null, 2);
          blob = new Blob([jsonStr], { type: 'application/json' });
          fileName = `${baseName}.json`;
        }

        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(link.href);
      } catch (err) {
        console.log('err: ', err);
      } finally {
        updateSearchParam({ isLoading: false });
      }
    }, 0);
  }, [fieldChecks, countries, offsetIn, fileType]);

  useEffect(() => {
    if (!window.location.search || isReset || redirected) {
      updateSearchParam(
        {
          reset: '',
          timezone: true,
          identifiers: true,
          countryName: true,
          countryCode: true,
          currentAbbreviation: true,
          currentLongName: true,
          currentOffset: true,
          currentDSTStatus: true,
          observesDst: true,
          upcomingDSTChange: true,
          ...(redirected ? { ...queryObj, redirected: '' } : {}),
        },
        false,
        true,
      );
    }
  }, [isReset]);

  const value = useMemo(
    () => ({
      fieldChecks,
      handleFieldCheck,
      country,
      handleCountry,
      downloadList,
      updateSearchParam,
      fileType,
      handleFileType,
      offsetIn,
      isLoading,
    }),
    [
      fieldChecks,
      handleFieldCheck,
      country,
      handleCountry,
      downloadList,
      updateSearchParam,
      fileType,
      handleFileType,
      offsetIn,
      isLoading,
    ],
  );

  return <DLContext value={value}>{children}</DLContext>;
};

export default memo(DLProvider);
