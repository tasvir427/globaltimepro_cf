import { memo } from 'react';
import { TIMEZONE_PARAMS } from '@/paramsData';
import TimezoneConverterOutput from '@/app/timezone-converter/output/page';

export const generateStaticParams = () => {
  return TIMEZONE_PARAMS;
};

const TimezoneOutput = (props) => {
  return <TimezoneConverterOutput {...props} />;
};

export default memo(TimezoneOutput);
