'use client';

import { memo } from 'react';
import CustomSelect from '@/Components/CustomSelect';
import { useTZ } from '@/Contexts/TZContext';
import { placeholders, timeFormatOptions } from '@/utils';

const TimeFormat = () => {
  const { timeFormat, handleFormatChange } = useTZ();

  return (
    <CustomSelect
      options={timeFormatOptions}
      placeholder={placeholders.timeFormat}
      value={timeFormat}
      onChange={handleFormatChange}
      classNamePrefix="react_select_scroll"
      isClearable
    />
  );
};

export default memo(TimeFormat);
