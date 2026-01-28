'use client';

import {
  createContext,
  use,
  useMemo,
  useCallback,
  useEffect,
  useRef,
  memo,
} from 'react';
import { toast } from 'react-toastify';
import moment from 'moment-timezone';
import { useQueryParamsWithHistory, useTimezone } from '@/Hooks';
import {
  dayFormatOptions,
  timeFormatOptions,
  timezoneFormatOptions,
  getTZOptionLabel,
  getTZOptionValue,
  joinValues,
  getTZSearchKeys,
  toNato,
  SITE_URL,
  getDefaultValue,
} from '@/utils';

const TZContext = createContext();
export const useTZ = () => use(TZContext);

const TZProvider = ({ children, defaultValue, outputOnly }) => {
  const prevDestinationCnt = useRef(0);
  const outputDiv = useRef(null);

  const { updateSearchParam, queryString, queryObj, pathname } =
    useQueryParamsWithHistory();

  const { timeNow, timeNowTZ, getTZList } = useTimezone();

  const tzCities = useMemo(() => getTZList(), [getTZList]);

  const {
    isReset,
    originTime,
    noChange,
    redirected,
    dayFormat,
    timeFormat,
    isCustomTimeFormat,
    timezoneFormat,
    isRealTime,
    customTimeFormat,
    originTZKey,
    destinationTZKey,
    destinationTZList,
  } = useMemo(() => {
    const sp = new URLSearchParams(queryString);

    const isReset = sp.get('reset') === 'true';
    const originTime = sp.get('originTime') || '';
    const noChange = sp.get('noChange') === 'true';
    const redirected = sp.get('redirected') === 'true';

    const dayFormat = sp.get('dayFormat') || dayFormatOptions[0];

    const timeFormatValue = sp.get('timeFormat');
    const timeFormat =
      timeFormatOptions.find((opt) => opt.value === timeFormatValue) ||
      timeFormatOptions[0];

    const isCustomTimeFormat = timeFormat?.value === 'custom';

    const timezoneFormatValue = sp.get('timezoneFormat');
    const timezoneFormat =
      timezoneFormatOptions.find((opt) => opt.value === timezoneFormatValue) ||
      timezoneFormatOptions[0];

    const isRealTime = sp.get('isRealTime') === 'true' || !sp.get('isRealTime');

    const customTimeFormat = sp.get('customTimeFormat') || '';

    const originTZKey = sp.get('originTimeZone');
    const destinationTZKey = sp.get('destinationTimeZone');

    const destinationTZList = destinationTZKey
      ? destinationTZKey.split(',')
      : [];

    return {
      isReset,
      originTime,
      noChange,
      redirected,
      dayFormat,
      timeFormat,
      isCustomTimeFormat,
      timezoneFormat,
      isRealTime,
      customTimeFormat,
      originTZKey,
      destinationTZKey,
      destinationTZList,
    };
  }, [queryString]);

  const tzList = useMemo(() => {
    return getTZList(timezoneFormat.value);
  }, [getTZList, timezoneFormat]);

  const tzSearchKeys = useMemo(
    () => getTZSearchKeys(timezoneFormat.value),
    [timezoneFormat],
  );

  const tzData = useMemo(() => {
    const map = new Map();
    for (const tz of tzList) {
      map.set(getTZOptionValue(tz), tz);
    }
    return map;
  }, [tzList]);

  const currentTZData = useMemo(
    () => tzList.find((tz) => tz.isCurrent),
    [tzList],
  );

  const originTimeZone = useMemo(() => {
    return originTZKey ? tzData.get(originTZKey) || null : null;
  }, [originTZKey, tzData]);

  const destinationTimeZone = useMemo(() => {
    if (!destinationTZKey) return null;
    const destinationTZ = destinationTZList
      .map((dtz) => tzData.get(dtz))
      .filter(Boolean);
    return destinationTZ.length > 0 ? destinationTZ : null;
  }, [destinationTZKey, destinationTZList, tzData]);

  const isOriginTimeZoneCurrent = useMemo(
    () => !!originTimeZone?.isCurrent,
    [originTimeZone],
  );

  const onOriginTimeZoneSwitchChange = useCallback(() => {
    if (isOriginTimeZoneCurrent) {
      updateSearchParam({ originTimeZone: '' });
    } else {
      updateSearchParam({
        originTimeZone: getTZOptionValue(currentTZData) || '',
      });
    }
  }, [isOriginTimeZoneCurrent, currentTZData, updateSearchParam]);

  const isDestinationTimeZoneCurrent = useMemo(
    () =>
      !!destinationTimeZone?.some((tz) => {
        return tz?.isCurrent;
      }),
    [destinationTimeZone],
  );

  const onDestinationTimeZoneSwitchChange = useCallback(() => {
    let arr = [...(destinationTimeZone || [])];
    if (isDestinationTimeZoneCurrent) {
      arr = arr.filter((tz) => !tz?.isCurrent);
    } else {
      arr.push(currentTZData);
    }
    updateSearchParam({ destinationTimeZone: joinValues(arr) });
  }, [
    isDestinationTimeZoneCurrent,
    destinationTimeZone,
    currentTZData,
    updateSearchParam,
  ]);

  const formatStr = useMemo(() => {
    if (timeFormat.value === 'HH:mm (military-nato)') {
      return 'HH:mm';
    } else if (
      timeFormat &&
      (timeFormat.value !== 'custom' || customTimeFormat)
    ) {
      if (timeFormat.value === 'custom') {
        return customTimeFormat;
      }
      return timeFormat.value;
    }
    return timeFormatOptions[0].value;
  }, [timeFormat, customTimeFormat]);

  const outputList = useMemo(() => {
    if (destinationTimeZone) {
      return destinationTimeZone.map((tz) => {
        const changedDate = moment
          .tz(originTime, originTimeZone?.timezone || currentTZData?.timezone)
          .tz(tz.timezone);
        let formattedDate = changedDate.format(formatStr);

        if (
          timeFormat.value === 'HH:mm (military-nato)' &&
          formattedDate !== 'Invalid date'
        ) {
          formattedDate = toNato(formattedDate);
        }

        return {
          date:
            formattedDate === 'Invalid date'
              ? 'please enter valid date and time'
              : !originTimeZone?.timezone
              ? 'please select origin timezone'
              : formattedDate,
          label: getTZOptionLabel(tz),
          value: getTZOptionValue(tz),
          timezone: tz.timezone,
        };
      });
    }
    return [];
  }, [
    originTime,
    originTimeZone,
    destinationTimeZone,
    currentTZData,
    formatStr,
  ]);

  const handleFormatChange = useCallback(
    (option) => {
      updateSearchParam({
        timeFormat: option?.value || '',
        customTimeFormat: option?.value === 'custom' ? customTimeFormat : '',
      });
    },
    [customTimeFormat, updateSearchParam],
  );

  const handleRemoveTZ = useCallback(
    (opt, label) => {
      let arr = [...destinationTimeZone];
      arr = arr.filter((tz) => getTZOptionValue(tz) !== opt);
      updateSearchParam({ destinationTimeZone: joinValues(arr) });
      toast(`${label} removed!`);
    },
    [destinationTimeZone, updateSearchParam],
  );

  const copyToClipboard = useCallback(async (text) => {
    navigator.clipboard.writeText(text).then(() => {
      toast(`${text} Copied!`);
    });
  }, []);

  const handleTimezoneFormat = useCallback(
    (value) => {
      const tz = getTZList(value?.value).find((tz) => tz.isCurrent);
      updateSearchParam({
        timezoneFormat: value?.value || '',
        originTimeZone:
          getDefaultValue(defaultValue.originTimeZone, value?.value) ||
          getTZOptionValue(tz) ||
          '',
        destinationTimeZone: getDefaultValue(
          defaultValue.destinationTimeZone,
          value?.value,
        ),
      });
    },
    [updateSearchParam],
  );

  const handleSwap = useCallback(
    (timezone) => {
      let arr = [...(destinationTimeZone || [])];
      const seen = new Set();

      arr = arr
        .map((tz) => (getTZOptionValue(tz) === timezone ? originTimeZone : tz))
        .filter((tz) => {
          const value = getTZOptionValue(tz);
          if (seen.has(value)) return false;
          seen.add(value);
          return true;
        });

      updateSearchParam({
        originTimeZone: timezone,
        destinationTimeZone: joinValues(arr),
      });
    },
    [originTimeZone, destinationTimeZone, updateSearchParam],
  );

  const handleMoreInfo = useCallback(
    (value) => {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams({
          timezoneFormat: timezoneFormat.value,
          originTimeZone: value,
        });
        const url =
          `${SITE_URL}/dst-checker?${params.toString()}` + '&redirected=true';

        window.open(url, '_blank');
      }
    },
    [timezoneFormat],
  );

  const getCity = useCallback(
    (value) => {
      if (timezoneFormat.value === 'city') {
        return value;
      } else {
        const tz = tzCities.find((c) => c.timezone === value);
        return tz ? getTZOptionValue(tz) : '';
      }
    },
    [timezoneFormat, tzCities],
  );

  const handlePlanJetLag = useCallback(
    (value) => {
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams({
          destinationTZ: getCity(value),
        });
        const url =
          `${SITE_URL}/jet-lag-planner?${params.toString()}` +
          '&redirected=true';

        window.open(url, '_blank');
      }
    },
    [getCity],
  );

  const outputPath = useMemo(() => {
    let newPath = pathname;

    if (!outputOnly) {
      newPath += '/output';
    } else {
      newPath = newPath.replace(/\/output$/, '');
    }

    return `${newPath}?${queryString}` + '&noChange=true';
  }, [pathname, queryString]);

  useEffect(() => {
    if (!window.location.search || isReset || redirected) {
      updateSearchParam(
        noChange
          ? { noChange: '' }
          : {
              reset: '',
              isRealTime: true,
              originTime: timeNow(),
              originTimeZone:
                getDefaultValue(
                  defaultValue.originTimeZone,
                  timezoneFormat.value,
                ) ||
                getTZOptionValue(currentTZData) ||
                '',
              destinationTimeZone: getDefaultValue(
                defaultValue.destinationTimeZone,
                timezoneFormat.value,
              ),
              ...(redirected ? { ...queryObj, redirected: '' } : {}),
              ...defaultValue,
            },
        false,
        true,
      );
    }
  }, [isReset]);

  useEffect(() => {
    if (
      prevDestinationCnt.current > 0 &&
      destinationTimeZone?.length > prevDestinationCnt.current
    ) {
      const elem = outputDiv.current;
      setTimeout(() => {
        elem.scrollTop = elem.scrollHeight;
      }, 1);
    }
    prevDestinationCnt.current = destinationTimeZone?.length || 0;
  }, [destinationTimeZone]);

  const value = useMemo(
    () => ({
      outputPath,
      handleMoreInfo,
      handlePlanJetLag,
      outputDiv,
      updateSearchParam,
      timeNow,
      timeNowTZ,
      originTime,
      dayFormat,
      timeFormat,
      isCustomTimeFormat,
      timezoneFormat,
      isRealTime,
      customTimeFormat,
      tzList,
      currentTZData,
      originTimeZone,
      destinationTimeZone,
      isDestinationTimeZoneCurrent,
      onDestinationTimeZoneSwitchChange,
      isOriginTimeZoneCurrent,
      onOriginTimeZoneSwitchChange,
      formatStr,
      outputList,
      handleFormatChange,
      handleRemoveTZ,
      copyToClipboard,
      handleTimezoneFormat,
      handleSwap,
      getTZSearchKeys: tzSearchKeys,
    }),
    [
      outputPath,
      handleMoreInfo,
      handlePlanJetLag,
      outputDiv,
      updateSearchParam,
      timeNow,
      timeNowTZ,
      originTime,
      dayFormat,
      timeFormat,
      isCustomTimeFormat,
      timezoneFormat,
      isRealTime,
      customTimeFormat,
      tzList,
      currentTZData,
      originTimeZone,
      destinationTimeZone,
      isDestinationTimeZoneCurrent,
      onDestinationTimeZoneSwitchChange,
      isOriginTimeZoneCurrent,
      onOriginTimeZoneSwitchChange,
      formatStr,
      outputList,
      handleFormatChange,
      handleRemoveTZ,
      copyToClipboard,
      handleTimezoneFormat,
      handleSwap,
      tzSearchKeys,
    ],
  );

  return <TZContext value={value}>{children}</TZContext>;
};

export default memo(TZProvider);
