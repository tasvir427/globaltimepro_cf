'use client';

import { memo } from 'react';
import { CustomBtn } from '@/Components';
import { useQueryParamsWithHistory } from '@/Hooks';
import { iconIoMdUndo, tooltips } from '@/utils';
import styles from './styles.module.css';

const UndoBtn = () => {
  const { undo } = useQueryParamsWithHistory();

  return (
    <CustomBtn title={tooltips.undo} onClick={undo} className={styles.undo_btn}>
      {iconIoMdUndo} undo
    </CustomBtn>
  );
};

export default memo(UndoBtn);
