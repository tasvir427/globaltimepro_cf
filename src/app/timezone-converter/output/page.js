import { memo } from 'react';
import TimezoneConverter from '../page';

const TimezoneConverterOutput = (props) => {
  return <TimezoneConverter {...props} outputOnly />;
};

export default memo(TimezoneConverterOutput);
