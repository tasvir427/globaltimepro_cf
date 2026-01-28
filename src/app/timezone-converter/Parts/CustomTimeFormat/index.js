'use client';

import { memo } from 'react';
import { useTZ } from '@/Contexts';
import { CustomTimeFormatContent } from '../index';
import { ClientOnly, CustomCollapse } from '@/Components';

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
