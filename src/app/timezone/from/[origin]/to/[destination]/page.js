import { memo } from 'react';
import { PATHS, TIMEZONE_PARAMS } from '@/paramsData';
import TimezoneConverter from '@/app/timezone-converter/page';
import { getMetaData } from '@/utils';

export const generateStaticParams = () => {
  return TIMEZONE_PARAMS;
};

export const generateMetadata = async ({ params }) => {
  const p = await params;
  const page =
    p.origin && p.destination
      ? `timezone/from/${p.origin}/to/${p.destination}`
      : PATHS.timezoneConverter;
  const m = await getMetaData(page, PATHS.timezoneConverter);

  return { ...m };
};

const TimezoneFromTo = (props) => {
  return <TimezoneConverter {...props} />;
};

export default memo(TimezoneFromTo);
