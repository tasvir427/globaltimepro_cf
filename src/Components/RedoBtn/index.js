'use client';

import { memo } from 'react';
import CustomBtn from '@/Components/CustomBtn';
import useQueryParamsWithHistory from '@/Hooks/useQueryParamsWithHistory';
import { iconIoMdRedo, tooltips } from '@/utils';

const RedoBtn = () => {
  const { redo } = useQueryParamsWithHistory('', { listenToLocation: false });

  return (
    <CustomBtn title={tooltips.redo} onClick={redo}>
      {iconIoMdRedo} redo
    </CustomBtn>
  );
};

export default memo(RedoBtn);
