'use client';

import { memo } from 'react';
import { CustomBtn } from '@/Components';
import { useQueryParamsWithHistory } from '@/Hooks';
import { icon2MdContentCopy, tooltips } from '@/utils';

const CopyResultBtn = () => {
  const { copyLink } = useQueryParamsWithHistory();

  return (
    <CustomBtn title={tooltips.copy_result} onClick={copyLink}>
      {icon2MdContentCopy} copy result link
    </CustomBtn>
  );
};

export default memo(CopyResultBtn);
