import { memo } from 'react';
import { TIMEZONE_PARAMS } from '@/paramsData';
import { SITE_URL } from '@/utils';
import TimezoneConverterOutput from '@/app/timezone-converter/output/page';

export const generateStaticParams = () => {
  return TIMEZONE_PARAMS;
};

export const generateMetadata = async ({ params }) => {
  const p = await params;
  const canonicalPath =
    p.origin && p.destination
      ? `timezone/from/${p.origin}/to/${p.destination}`
      : 'timezone-converter';

  return {
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
      },
    },
    alternates: {
      canonical: `${SITE_URL}/${canonicalPath}`,
    },
  };
};

const TimezoneOutput = (props) => {
  return <TimezoneConverterOutput {...props} />;
};

export default memo(TimezoneOutput);
