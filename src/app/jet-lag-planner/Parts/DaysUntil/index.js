'use client';

import { memo } from 'react';
import { useJL } from '@/Contexts';
import { DaysUntilContent } from '../index';
import { ClientOnly, CustomCollapse } from '@/Components';

const DaysUntil = () => {
  const { isDaysUntilDeparture } = useJL();

  return (
    <ClientOnly
      placeholder={
        <div>
          <DaysUntilContent isLoading />
        </div>
      }
    >
      <CustomCollapse isExpanded={isDaysUntilDeparture}>
        <DaysUntilContent />
      </CustomCollapse>
    </ClientOnly>
  );
};

export default memo(DaysUntil);
