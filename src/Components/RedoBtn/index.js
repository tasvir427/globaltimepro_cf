'use client';

import { memo } from 'react';
import { CustomBtn } from '@/Components';
import { useQueryParamsWithHistory } from '@/Hooks';
import { iconIoMdRedo, tooltips } from '@/utils';

const RedoBtn = () => {
  const { redo } = useQueryParamsWithHistory();

  return (
    <CustomBtn title={tooltips.redo} onClick={redo}>
      {iconIoMdRedo} redo
    </CustomBtn>
  );
};

export default memo(RedoBtn);
