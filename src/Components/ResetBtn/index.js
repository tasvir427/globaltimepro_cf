'use client';

import { memo } from 'react';
import { CustomBtn } from '@/Components';
import { iconRiResetLeftLine, tooltips } from '@/utils';
import { useQueryParamsWithHistory } from '@/Hooks';

const ResetBtn = () => {
  const { reset } = useQueryParamsWithHistory();

  return (
    <CustomBtn title={tooltips.reset} onClick={reset}>
      {iconRiResetLeftLine} reset
    </CustomBtn>
  );
};

export default memo(ResetBtn);
