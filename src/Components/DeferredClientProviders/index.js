'use client';

import { memo } from 'react';
import dynamic from 'next/dynamic';

const ClientProviders = dynamic(() => import('@/Components/ClientProviders'), {
  ssr: false,
});

const DeferredClientProviders = () => {
  return <ClientProviders />;
};

export default memo(DeferredClientProviders);
