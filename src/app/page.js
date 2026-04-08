// default

import { memo } from 'react';
import { SITE_URL } from '@/utils';

export const metadata = {
  title: 'Global Time Pro',
  description: 'Global Time Pro tool hub.',
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/timezone-converter`,
  },
};

const Home = () => {
  return null;
};

export default memo(Home);
