'use client';

import {
  createContext,
  use,
  useMemo,
  memo,
  useCallback,
  useEffect,
} from 'react';
import moment from 'moment-timezone';
import { toast } from 'react-toastify';
import { useQueryParamsWithHistory, useTimezone } from '@/Hooks';
import {
  getTZOptionValue,
  getTZSearchKeys,
  timeLineOptions,
  getTZOptionLabel,
  generatePlanData,
  defDateFormat,
} from '@/utils';

const JLContext = createContext();
export const useJL = () => use(JLContext);

const JLProvider = ({ children, defaultValue, initialQueryString }) => {
  const { updateSearchParam, queryString, queryObj, params } =
    useQueryParamsWithHistory(initialQueryString);

  const { getTZList, userCity } = useTimezone();

  const jlGetTZOptionLabel = useCallback((opt) => getTZOptionLabel(opt), []);

  const tzCities = useMemo(() => getTZList(), [getTZList]);

  const tzSearchKeys = useMemo(() => getTZSearchKeys('city'), []);

  const {
    isReset,
    redirected,
    show,
    departureTime,
    arrivalTime,
    bedTime,
    wakeTime,
    daysUntilDeparture,
    departureTZKey,
    destinationTZKey,
    timeLine,
  } = useMemo(() => {
    const sp = new URLSearchParams(queryString);

    const isReset = sp.get('reset') === 'true';
    const redirected = sp.get('redirected') === 'true';

    const show = sp.get('show') || '';
    const departureTime = sp.get('departureTime') || '';
    const arrivalTime = sp.get('arrivalTime') || '';
    const bedTime = sp.get('bedTime') || '';
    const wakeTime = sp.get('wakeTime') || '';
    const daysUntilDeparture = sp.get('daysUntilDeparture') || '';

    const departureTZKey = sp.get('departureTZ');
    const destinationTZKey = sp.get('destinationTZ');

    const timeLineValue = sp.get('timeLine');
    const timeLine =
      timeLineOptions.find((opt) => opt.value === timeLineValue) ||
      timeLineOptions[0];

    return {
      isReset,
      redirected,
      show,
      departureTime,
      arrivalTime,
      bedTime,
      wakeTime,
      daysUntilDeparture,
      departureTZKey,
      destinationTZKey,
      timeLine,
    };
  }, [queryString]);

  const tzData = useMemo(() => {
    const map = new Map();
    for (const tz of tzCities) {
      map.set(getTZOptionValue(tz), tz);
    }
    return map;
  }, [tzCities]);

  const currentTZData = useMemo(
    () => tzCities.find((tz) => tz.isCurrent),
    [tzCities],
  );

  const departureTZ = useMemo(() => {
    return departureTZKey ? tzData.get(departureTZKey) || null : null;
  }, [departureTZKey, tzData]);

  const destinationTZ = useMemo(() => {
    return destinationTZKey ? tzData.get(destinationTZKey) || null : null;
  }, [destinationTZKey, tzData]);

  const isDepartureTZCurrent = useMemo(
    () => !!departureTZ?.isCurrent,
    [departureTZ],
  );

  const isDestinationTZCurrent = useMemo(
    () => !!destinationTZ?.isCurrent,
    [destinationTZ],
  );

  const onDepartureTZSwitchChange = useCallback(() => {
    if (isDepartureTZCurrent) {
      updateSearchParam({ departureTZ: '', show: '' });
    } else {
      updateSearchParam({
        departureTZ: getTZOptionValue(currentTZData) || '',
        show: '',
      });
    }
  }, [isDepartureTZCurrent, currentTZData, updateSearchParam]);

  const onDestinationTZSwitchChange = useCallback(() => {
    if (isDestinationTZCurrent) {
      updateSearchParam({ destinationTZ: '', show: '' });
    } else {
      updateSearchParam({
        destinationTZ: getTZOptionValue(currentTZData) || '',
        show: '',
      });
    }
  }, [isDestinationTZCurrent, currentTZData, updateSearchParam]);

  const handleTimeLine = useCallback(
    (option) => {
      updateSearchParam({
        timeLine: option?.value || '',
        daysUntilDeparture:
          option?.value === 'daysUntilDeparture' ? daysUntilDeparture || 2 : '',
        show: '',
      });
    },
    [daysUntilDeparture, updateSearchParam],
  );

  const isDaysUntilDeparture = useMemo(
    () => timeLine?.value === 'daysUntilDeparture',
    [timeLine],
  );

  const wakeTimeOnly = useMemo(() => {
    if (!wakeTime) return '';
    return moment(wakeTime, 'YYYY-MM-DD HH:mm:ss').format('HH:mm');
  }, [wakeTime]);

  const bedTimeOnly = useMemo(() => {
    if (!bedTime) return '';
    return moment(bedTime, 'YYYY-MM-DD HH:mm:ss').format('HH:mm');
  }, [bedTime]);

  const plan = useMemo(
    () =>
      generatePlanData({
        departureTime,
        arrivalTime,
        departureTZ,
        destinationTZ,
        wakeTimeOnly,
        bedTimeOnly,
        daysUntilDeparture,
        timeLine,
      }),
    [
      departureTime,
      arrivalTime,
      departureTZ,
      destinationTZ,
      wakeTimeOnly,
      bedTimeOnly,
      daysUntilDeparture,
      timeLine,
    ],
  );

  const generatePlan = useCallback(() => {
    if (!departureTime) return toast('Please specify a departure time.');
    if (!arrivalTime) return toast('Please specify an arrival time.');
    if (!departureTZ) return toast('Please choose a departure city.');
    if (!destinationTZ) return toast('Please choose a destination city.');
    if (!wakeTimeOnly) return toast('Please specify a wake time.');
    if (!bedTimeOnly) return toast('Please specify a bedtime.');
    if (
      timeLine.value === 'daysUntilDeparture' &&
      !Number(daysUntilDeparture)
    ) {
      return toast('Please enter the number of days until departure.');
    }
    const element = document.getElementById('jl-output');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    return updateSearchParam({ show: true });
  }, [
    updateSearchParam,
    departureTime,
    arrivalTime,
    departureTZ,
    destinationTZ,
    wakeTimeOnly,
    bedTimeOnly,
    timeLine,
    daysUntilDeparture,
  ]);

  useEffect(() => {
    if (!window.location.search || isReset || redirected) {
      const m = moment();
      const baseDate = m.clone().add(2, 'days');
      const departureMoment = baseDate.clone().set({ hour: 10, minute: 0 });

      let routeData = {};
      if (params.origin && params.destination) {
        const rData = defaultValue;

        if (rData) {
          const arrivalMoment = departureMoment
            .clone()
            .add(rData.flightDuration, 'hours');

          routeData = {
            ...rData,
            show: true,
            daysUntilDeparture: '2',
            timeLine: 'daysUntilDeparture',
            arrivalTime: arrivalMoment.format(defDateFormat),
            flightDuration: '',
          };
        }
      } else if (isReset) {
        routeData.departureTZ = getTZOptionValue(currentTZData) || '';
      }

      const arrivalMoment = departureMoment.clone().add(8, 'hours');
      const bedMoment = m.clone().set({ hour: 23, minute: 0 });
      const wakeMoment = m.clone().set({ hour: 7, minute: 0 });

      updateSearchParam(
        {
          reset: '',
          departureTime: departureMoment.format(defDateFormat),
          arrivalTime: arrivalMoment.format(defDateFormat),
          bedTime: bedMoment.format(defDateFormat),
          wakeTime: wakeMoment.format(defDateFormat),
          ...(redirected ? { ...queryObj, redirected: '' } : {}),
          ...routeData,
        },
        false,
        true,
      );
    }
  }, [isReset]);

  useEffect(() => {
    if (!departureTZKey && ![-1, -2].includes(userCity)) {
      updateSearchParam({ departureTZ: getTZOptionValue(currentTZData) || '' });
    }
  }, [userCity]);

  const value = useMemo(
    () => ({
      updateSearchParam,
      tzCities,
      departureTime,
      arrivalTime,
      bedTime,
      wakeTime,
      timeLine,
      daysUntilDeparture,
      plan,
      departureTZ,
      isDepartureTZCurrent,
      onDepartureTZSwitchChange,
      destinationTZ,
      isDestinationTZCurrent,
      onDestinationTZSwitchChange,
      handleTimeLine,
      isDaysUntilDeparture,
      show,
      getTZOptionLabel: jlGetTZOptionLabel,
      getTZSearchKeys: tzSearchKeys,
      generatePlan,
    }),
    [
      updateSearchParam,
      tzCities,
      departureTime,
      arrivalTime,
      bedTime,
      wakeTime,
      timeLine,
      daysUntilDeparture,
      plan,
      departureTZ,
      isDepartureTZCurrent,
      onDepartureTZSwitchChange,
      destinationTZ,
      isDestinationTZCurrent,
      onDestinationTZSwitchChange,
      handleTimeLine,
      isDaysUntilDeparture,
      show,
      jlGetTZOptionLabel,
      tzSearchKeys,
      generatePlan,
    ],
  );

  return <JLContext value={value}>{children}</JLContext>;
};

export default memo(JLProvider);
