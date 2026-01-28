'use client';

import {
  createContext,
  use,
  useMemo,
  useCallback,
  useEffect,
  memo,
} from 'react';
import { useQueryParamsWithHistory, useTimezone } from '@/Hooks';
import {
  getTZOptionValue,
  getNextTransition,
  timezoneFormatOptions,
  getTZSearchKeys,
  getCurrentTZTime,
  getCurrentDSTStatus,
  getCurrentOffset,
  getNextTransitionText,
  getNextTransitionOffset,
  getTransitionType,
  getExtraMessage,
  getFollowingMessage,
  getTZInfo,
  isTZDST,
  getDefaultValue,
} from '@/utils';

const DSTContext = createContext();
export const useDST = () => use(DSTContext);

const DSTProvider = ({ children, defaultValue }) => {
  const { updateSearchParam, queryString, queryObj } =
    useQueryParamsWithHistory();
  const { getTZList } = useTimezone();

  const { originTZKey, isReset, redirected, timezoneFormat } = useMemo(() => {
    const sp = new URLSearchParams(queryString);

    const originTZKey = sp.get('originTimeZone');
    const isReset = sp.get('reset') === 'true';
    const redirected = sp.get('redirected') === 'true';

    const tzFormatValue = sp.get('timezoneFormat');
    const timezoneFormat =
      timezoneFormatOptions.find((opt) => opt.value === tzFormatValue) ||
      timezoneFormatOptions[0];

    return {
      originTZKey,
      isReset,
      redirected,
      timezoneFormat,
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

  const addInfo = useMemo(() => {
    if (!originTimeZone) return;

    const info = getTZInfo(originTimeZone, timezoneFormat);

    return info;
  }, [originTimeZone]);

  const currentTZTime = useMemo(
    () => getCurrentTZTime(originTimeZone),
    [originTimeZone],
  );

  const isDST = useMemo(() => isTZDST(originTimeZone), [originTimeZone]);

  const currentDSTStatus = useMemo(() => getCurrentDSTStatus(isDST), [isDST]);

  const abbrevTransition = useMemo(() => {
    const { standardAbbreviation, dstAbbreviation } = originTimeZone || {};
    return `${isDST ? dstAbbreviation : standardAbbreviation} to ${
      isDST ? standardAbbreviation : dstAbbreviation
    }`;
  }, [isDST, originTimeZone]);

  const currentOffset = useMemo(
    () => getCurrentOffset(currentTZTime),
    [currentTZTime],
  );

  const nextTransitionData = useMemo(() => {
    if (!currentTZTime || !originTimeZone) return null;
    return getNextTransition(originTimeZone?.timezone, currentTZTime);
  }, [currentTZTime, originTimeZone]);

  const followingTransitionData = useMemo(() => {
    if (!nextTransitionData) return null;
    const newBaseTime = nextTransitionData.officialTransition
      .clone()
      .add(1, 'minute');

    return getNextTransition(originTimeZone?.timezone, newBaseTime);
  }, [originTimeZone, nextTransitionData]);

  const nextTransitionText = useMemo(
    () => getNextTransitionText(nextTransitionData),
    [nextTransitionData],
  );

  const nextTransitionOffset = useMemo(
    () => getNextTransitionOffset(nextTransitionData),
    [nextTransitionData],
  );

  const transitionType = useMemo(
    () => getTransitionType(nextTransitionData, isDST),
    [nextTransitionData, isDST],
  );

  const extraMessage = useMemo(
    () => getExtraMessage(nextTransitionData, isDST),
    [nextTransitionData, isDST],
  );

  const followingMessage = useMemo(
    () => getFollowingMessage(followingTransitionData, isDST),
    [followingTransitionData, isDST],
  );

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

  const handleTimezoneFormat = useCallback(
    (value) => {
      const tz = getTZList(value?.value).find((tz) => tz.isCurrent);
      updateSearchParam({
        timezoneFormat: value?.value || '',
        originTimeZone:
          getDefaultValue(defaultValue.originTimeZone, value?.value) ||
          getTZOptionValue(tz) ||
          '',
      });
    },
    [updateSearchParam, getTZList],
  );

  useEffect(() => {
    if (!window.location.search || isReset || redirected) {
      updateSearchParam(
        {
          reset: '',
          originTimeZone:
            getDefaultValue(
              defaultValue.originTimeZone,
              timezoneFormat.value,
            ) ||
            getTZOptionValue(currentTZData) ||
            '',
          ...(redirected ? { ...queryObj, redirected: '' } : {}),
          ...defaultValue,
        },
        false,
        true,
      );
    }
  }, [isReset]);

  const value = useMemo(
    () => ({
      updateSearchParam,
      timezoneFormat,
      tzList,
      originTimeZone,
      isOriginTimeZoneCurrent,
      onOriginTimeZoneSwitchChange,
      handleTimezoneFormat,
      currentDSTStatus,
      currentOffset,
      nextTransitionData,
      nextTransitionText,
      transitionType,
      nextTransitionOffset,
      extraMessage,
      followingMessage,
      getTZSearchKeys: tzSearchKeys,
      addInfo,
      abbrevTransition,
    }),
    [
      updateSearchParam,
      timezoneFormat,
      tzList,
      originTimeZone,
      isOriginTimeZoneCurrent,
      onOriginTimeZoneSwitchChange,
      handleTimezoneFormat,
      currentDSTStatus,
      currentOffset,
      nextTransitionData,
      nextTransitionText,
      transitionType,
      nextTransitionOffset,
      extraMessage,
      followingMessage,
      tzSearchKeys,
      addInfo,
      abbrevTransition,
    ],
  );

  return <DSTContext value={value}>{children}</DSTContext>;
};

export default memo(DSTProvider);
