'use client';

import { memo } from 'react';
import { useTZ } from '@/Contexts';
import { ClientOnly, CustomCollapse } from '@/Components';
import { TimeInputFormatContent } from '../index';

const CustomTimeFormat = () => {
  const { isRealTime } = useTZ();

  return (
    <ClientOnly
      placeholder={
        <div>
          <TimeInputFormatContent isLoading />
        </div>
      }
    >
      <CustomCollapse isExpanded={!isRealTime}>
        <TimeInputFormatContent />
      </CustomCollapse>
    </ClientOnly>
  );
};

export default memo(CustomTimeFormat);
