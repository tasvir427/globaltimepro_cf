'use client';

import { memo } from 'react';
import { useDL } from '@/Contexts';
import styles from '../../styles.module.css';

const DownloadList = () => {
  const { isLoading, downloadList } = useDL();

  return (
    <div className={styles.home_section_container}>
      <button
        className={styles.download_list_btn}
        onClick={downloadList}
        disabled={isLoading}
      >
        Download{isLoading ? 'ing...' : ''}
      </button>
    </div>
  );
};

export default memo(DownloadList);
