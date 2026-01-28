'use client';

import { memo } from 'react';
import { useTZ } from '@/Contexts';
import { dayFormatOptions, tooltips } from '@/utils';
import { CustomChoice } from '@/Components';
import styles from '../../styles.module.css';

const TimeInputFormatContent = ({ isLoading }) => {
  const { updateSearchParam, dayFormat, isRealTime } = useTZ();

  if (isLoading && isRealTime) {
    return null;
  }

  return (
    <div className={styles.day_format_opt_container}>
      <div title={tooltips.dayFormat}>
        <CustomChoice
          opts={dayFormatOptions}
          value={dayFormat}
          onChange={(value) => updateSearchParam({ dayFormat: value || '' })}
        />
      </div>
    </div>
  );
};

export default memo(TimeInputFormatContent);
