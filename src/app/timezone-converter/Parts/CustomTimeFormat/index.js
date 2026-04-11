'use client';

import { memo } from 'react';
import { useTZ } from '@/Contexts/TZContext';
import { CustomTimeFormatContent } from '../index';
import ClientOnly from '@/Components/ClientOnly';
import CustomCollapse from '@/Components/CustomCollapse';

const CustomTimeFormat = () => {
  const { isCustomTimeFormat } = useTZ();

  return (
    <ClientOnly
      placeholder={
        <div>
          <CustomTimeFormatContent isLoading />
        </div>
      }
    >
      <CustomCollapse isExpanded={isCustomTimeFormat}>
        <CustomTimeFormatContent />
      </CustomCollapse>
    </ClientOnly>
  );
};

export default memo(CustomTimeFormat);
