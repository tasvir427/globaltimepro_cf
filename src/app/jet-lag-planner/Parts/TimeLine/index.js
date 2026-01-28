'use client';

import { memo } from 'react';
import { CustomSelect } from '@/Components';
import { useJL } from '@/Contexts';
import { placeholders, timeLineOptions } from '@/utils';

const TimeLine = () => {
  const { timeLine, handleTimeLine } = useJL();

  return (
    <CustomSelect
      options={timeLineOptions}
      placeholder={placeholders.timeLine}
      value={timeLine}
      onChange={handleTimeLine}
      classNamePrefix="react_select_scroll"
      isClearable
    />
  );
};

export default memo(TimeLine);
