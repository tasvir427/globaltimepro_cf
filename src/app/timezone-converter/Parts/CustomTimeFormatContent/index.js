'use client';

import { memo, useCallback, useRef, useLayoutEffect } from 'react';
import { CustomInput } from '@/Components';
import { useTZ } from '@/Contexts';
import { placeholders, tooltips } from '@/utils';
import styles from '../../styles.module.css';

const CustomTimeFormatContent = ({ isLoading }) => {
  const { updateSearchParam, isCustomTimeFormat, customTimeFormat } = useTZ();
  const inputRef = useRef(null);
  const selectionRef = useRef({ selectionStart: null, selectionEnd: null });

  const handleChange = useCallback(
    (e) => {
      selectionRef.current = {
        selectionStart: e.target.selectionStart,
        selectionEnd: e.target.selectionEnd,
      };

      updateSearchParam({ customTimeFormat: e.target.value || '' });
    },
    [updateSearchParam],
  );

  useLayoutEffect(() => {
    const { selectionStart, selectionEnd } = selectionRef.current;
    if (inputRef.current && selectionStart !== null && selectionEnd !== null) {
      inputRef.current.setSelectionRange(selectionStart, selectionEnd);
    }
  }, [customTimeFormat]);

  if (isLoading && !isCustomTimeFormat) {
    return null;
  }

  return (
    <div className={styles.home_section_container}>
      <CustomInput
        ref={inputRef}
        value={customTimeFormat}
        placeholder={placeholders.customTimeFormat}
        title={tooltips.customTimeFormat}
        onChange={handleChange}
        autoFocus
      />
    </div>
  );
};

export default memo(CustomTimeFormatContent);
