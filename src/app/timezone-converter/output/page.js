import { memo } from 'react';
import { PATHS } from '@/paramsData';
import { SITE_URL } from '@/utils';
import TimezoneConverter from '../page';

export const metadata = {
  robots: {
    index: false,
    follow: true,
    googleBot: {
      index: false,
      follow: true,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/${PATHS.timezoneConverter}`,
  },
};

const TimezoneConverterOutput = (props) => {
  return <TimezoneConverter {...props} outputOnly />;
};

export default memo(TimezoneConverterOutput);
