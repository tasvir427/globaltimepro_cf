'use client';

import { memo, useCallback, useRef, useLayoutEffect } from 'react';
import { CustomInput } from '@/Components';
import { useJL } from '@/Contexts';
import { placeholders, tooltips } from '@/utils';
import styles from '../../styles.module.css';

const DaysUntilContent = ({ isLoading }) => {
  const { updateSearchParam, isDaysUntilDeparture, daysUntilDeparture } =
    useJL();
  const inputRef = useRef(null);
  const selectionRef = useRef({ selectionStart: null, selectionEnd: null });

  const handleChange = useCallback(
    (e) => {
      selectionRef.current = {
        selectionStart: e.target.selectionStart,
        selectionEnd: e.target.selectionEnd,
      };

      if (Number(e.target.value) > 0 || !e.target.value) {
        updateSearchParam({
          daysUntilDeparture: Number(e.target.value) || '',
          show: '',
        });
      }
    },
    [updateSearchParam],
  );

  useLayoutEffect(() => {
    const { selectionStart, selectionEnd } = selectionRef.current;
    if (inputRef.current && selectionStart !== null && selectionEnd !== null) {
      inputRef.current.setSelectionRange(selectionStart, selectionEnd);
    }
  }, [daysUntilDeparture]);

  if (isLoading && !isDaysUntilDeparture) {
    return null;
  }

  return (
    <div className={styles.home_section_container}>
      <CustomInput
        ref={inputRef}
        value={daysUntilDeparture}
        placeholder={placeholders.daysUntilDeparture}
        title={tooltips.daysUntilDeparture}
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
};

export default memo(DaysUntilContent);
