'use client';

import { memo } from 'react';
import CustomSelect from '@/Components/CustomSelect';
import { useJL } from '@/Contexts/JLContext';
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
