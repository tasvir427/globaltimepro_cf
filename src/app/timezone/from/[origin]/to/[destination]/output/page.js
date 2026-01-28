import { memo } from 'react';
import TimezoneConverterOutput from '@/app/timezone-converter/output/page';

const TimezoneOutput = (props) => {
  return <TimezoneConverterOutput {...props} />;
};

export default memo(TimezoneOutput);
