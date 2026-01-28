'use client';

import { memo } from 'react';
import { useMediaQuery } from 'react-responsive';
import { iconFaArrowRight } from '@/utils';
import { ClientOnly } from '@/Components';

const MiddleArrow = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 620 });

  return <ClientOnly>{isSmallScreen ? null : iconFaArrowRight}</ClientOnly>;
};

export default memo(MiddleArrow);
