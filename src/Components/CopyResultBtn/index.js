'use client';

import { memo } from 'react';
import CustomBtn from '@/Components/CustomBtn';
import useQueryParamsWithHistory from '@/Hooks/useQueryParamsWithHistory';
import { icon2MdContentCopy, tooltips } from '@/utils';

const CopyResultBtn = () => {
  const { copyLink } = useQueryParamsWithHistory('', { listenToLocation: false });

  return (
    <CustomBtn title={tooltips.copy_result} onClick={copyLink}>
      {icon2MdContentCopy} copy result link
    </CustomBtn>
  );
};

export default memo(CopyResultBtn);
