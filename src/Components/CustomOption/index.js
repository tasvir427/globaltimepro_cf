'use client';

import { memo } from 'react';
import { components } from 'react-select';
import classNames from 'classnames';
import { primaryTZOptText, secondaryTZOptText } from '@/utils';
import styles from './styles.module.css';

const CustomOption = (props) => {
  const { data } = props;
  const { type, countryName } = data;

  return (
    <components.Option {...props}>
      <div className={styles.optionContainer}>
        <div className={styles.optionHeader}>
          <span className={styles.mainText}>
            <span
              className={classNames({
                [styles.mainText_breakAll]: type === 'name',
              })}
            >
              {primaryTZOptText(data)}
            </span>
            {countryName ? ` • ${countryName}` : ''}
          </span>
          {data.isCurrent && (
            <span className={styles.currentBadge}>Current</span>
          )}
        </div>
        <span className={styles.subText}>{secondaryTZOptText(data)}</span>
      </div>
    </components.Option>
  );
};

export default memo(CustomOption);
