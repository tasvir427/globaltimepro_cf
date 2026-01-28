'use client';

import { memo } from 'react';
import { ClientOnly, Placeholder } from '../index';
import { reactSelectStyles } from '@/utils';
import Select from '../WindowedSelect';
import styles from './styles.module.css';

const CustomSelect = (props) => {
  return (
    <ClientOnly placeholder={<Placeholder width={260} height={34.8} />}>
      <Select
        className={styles.tz_select}
        styles={reactSelectStyles}
        {...props}
      />
    </ClientOnly>
  );
};

export default memo(CustomSelect);
