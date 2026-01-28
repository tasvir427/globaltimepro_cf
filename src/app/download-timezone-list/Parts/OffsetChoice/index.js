'use client';

import { memo } from 'react';
import { useDL } from '@/Contexts';
import { offsetOptions } from '@/utils';
import { CustomChoice } from '@/Components';

const OffsetChoice = () => {
  const { updateSearchParam, offsetIn } = useDL();

  return (
    <CustomChoice
      opts={offsetOptions}
      value={offsetIn}
      onChange={(value) => updateSearchParam({ offsetIn: value || '' })}
    />
  );
};

export default memo(OffsetChoice);
