'use client';

import { memo } from 'react';
import moment from 'moment-timezone';
import { inputLabels, tooltips } from '@/utils';
import { useTZ } from '@/Contexts';
import { ClientOnly, CustomDatePicker, InputLabel } from '@/Components';
import TimeInputFormat from '../TimeInputFormat';
import styles from '../../styles.module.css';

const OriginTime = () => {
  const {
    updateSearchParam,
    originTime,
    dayFormat,
    isRealTime,
    timeNowTZ,
    originTimeZone,
  } = useTZ();

  return (
    <>
      <div className={styles.day_format_container}>
        <InputLabel className={styles.text_align_center}>
          {inputLabels.originTime}
        </InputLabel>
        <TimeInputFormat />
      </div>
      <div className={styles.date_picker_container}>
        <div title={tooltips.originTime} className={styles.date_picker_title}>
          <CustomDatePicker
            onChange={(date) => {
              updateSearchParam({
                originTime: date
                  ? moment(date).format('YYYY-MM-DD HH:mm:ss')
                  : '',
              });
            }}
            value={originTime}
            dayFormat={dayFormat}
            isRealTime={isRealTime}
          />
          <ClientOnly>
            {isRealTime && (
              <div
                className={styles.date_picker_title_overlay}
                onClick={() =>
                  updateSearchParam({
                    isRealTime: 'false',
                    originTime: timeNowTZ(originTimeZone?.timezone),
                  })
                }
              >
                <span>Tap to choose custom time</span>
              </div>
            )}
          </ClientOnly>
        </div>
      </div>
    </>
  );
};

export default memo(OriginTime);
