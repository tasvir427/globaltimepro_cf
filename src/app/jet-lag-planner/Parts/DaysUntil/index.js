'use client';

import { memo } from 'react';
import { useJL } from '@/Contexts/JLContext';
import { DaysUntilContent } from '../index';
import ClientOnly from '@/Components/ClientOnly';
import CustomCollapse from '@/Components/CustomCollapse';

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
