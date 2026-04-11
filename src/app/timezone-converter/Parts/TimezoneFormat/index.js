'use client';

import { memo } from 'react';
import CustomSelect from '@/Components/CustomSelect';
import { useTZ } from '@/Contexts/TZContext';
import { placeholders, timezoneFormatOptions } from '@/utils';

const TimezoneFormat = () => {
  const { timezoneFormat, handleTimezoneFormat } = useTZ();

  return (
    <CustomSelect
      options={timezoneFormatOptions}
      placeholder={placeholders.timezoneFormat}
      value={timezoneFormat}
      onChange={handleTimezoneFormat}
      classNamePrefix="react_select_scroll"
      isClearable
    />
  );
};

export default memo(TimezoneFormat);
