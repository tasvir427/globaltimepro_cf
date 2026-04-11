'use client';

import { memo } from 'react';
import { useTZ } from '@/Contexts/TZContext';
import ClientOnly from '@/Components/ClientOnly';
import CustomCollapse from '@/Components/CustomCollapse';
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
