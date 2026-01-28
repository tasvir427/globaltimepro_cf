'use client';

import React, { memo } from 'react';
import { inputLabels, tooltips } from '@/utils';
import { useDL } from '@/Contexts';
import styles from '../../styles.module.css';

const CustomCheckbox = ({ name }) => {
  const { fieldChecks, handleFieldCheck } = useDL();
  const id = `dl_${name}`;

  return (
    <div className={styles.checkbox_container} title={tooltips[id]}>
      <input
        type="checkbox"
        id={id}
        checked={fieldChecks[name]}
        onChange={() => handleFieldCheck(name)}
        className={styles.visuallyHidden}
      />

      <label htmlFor={id} className={styles.checkbox_wrapper}>
        <span className={styles.custom_checkbox}>
          {fieldChecks[name] && (
            <svg viewBox="0 0 24 24" className={styles.checkbox_checkmark}>
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
            </svg>
          )}
        </span>
        <span className={styles.checkbox_label}>{inputLabels[id]}</span>
      </label>
    </div>
  );
};

export default memo(CustomCheckbox);
