'use client';

import { memo } from 'react';
import moment from 'moment-timezone';
import { tooltips } from '@/utils';
import { useJL } from '@/Contexts';
import { CustomDatePicker } from '@/Components';
import styles from '../../styles.module.css';

const OriginTime = ({ name, ...rest }) => {
  const jl = useJL();
  const { updateSearchParam } = jl;
  const value = jl[name];

  return (
    <div className={styles.date_picker_container}>
      <div title={tooltips[name]} className={styles.date_picker_title}>
        <CustomDatePicker
          onChange={(date) => {
            updateSearchParam({
              [name]: date ? moment(date).format('YYYY-MM-DD HH:mm:ss') : '',
              show: '',
            });
          }}
          value={value}
          {...rest}
        />
      </div>
    </div>
  );
};

export default memo(OriginTime);
