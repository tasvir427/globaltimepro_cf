'use client';

import { useState, useEffect, memo, useMemo } from 'react';
import classNames from 'classnames';
import { getTimeSegment, getTZTime } from '@/utils';
import styles from './styles.module.css';

const TimezoneClock = ({
  date,
  isRealTime,
  formatStr,
  timeFormat,
  timezone,
  originTime,
  originTimeZone,
  currentTZData,
  isTZ,
}) => {
  const [time, setTime] = useState('');
  const [_date, setDate] = useState('');

  const status = useMemo(() => {
    if (!isTZ) return;

    const originTZ = originTimeZone?.timezone || currentTZData?.timezone;

    return getTimeSegment(originTime, originTZ, timezone, isRealTime);
  }, [originTime, isRealTime, originTimeZone, currentTZData, timezone, isTZ]);

  useEffect(() => {
    let interval;

    const updateRealTime = () => {
      const d = getTZTime(timezone, formatStr, timeFormat);

      setTime(d.time);
      setDate(d.date);

      const millisecondsToNextSecond = 1000 - new Date().getMilliseconds();

      interval = setTimeout(updateRealTime, millisecondsToNextSecond);
    };

    if (isRealTime) {
      updateRealTime();
    } else {
      setTime(date);
      setDate('');
    }

    return () => clearTimeout(interval);
  }, [timezone, date, isRealTime, formatStr, timeFormat]);

  return (
    <>
      <div className={styles.tz_clock}>
        {isTZ && (
          <span
            className={classNames(
              styles.tz_indicator,
              styles[`${status?.className}`],
            )}
            title={status?.name}
          >
            <span />
          </span>
        )}
        <span>{time || '00:00:00'}</span>
      </div>
      {!isTZ && <div className={styles.tz_date}>{_date || '--'}</div>}
    </>
  );
};

export default memo(TimezoneClock);
