'use client';

import { memo } from 'react';
import CustomOption from '@/Components/CustomOption';
import CustomSelect from '@/Components/CustomSelect';
import { useJL } from '@/Contexts/JLContext';
import { getTZOptionLabel, getTZOptionValue, placeholders } from '@/utils';

const TimeZoneSelector = ({ name }) => {
  const jl = useJL();
  const { updateSearchParam, tzCities, getTZSearchKeys } = jl;
  const value = jl[name];

  return (
    <CustomSelect
      options={tzCities}
      placeholder={placeholders[name]}
      value={value}
      onChange={(value) =>
        updateSearchParam({
          [name]: getTZOptionValue(value) || '',
          show: '',
        })
      }
      components={{ Option: CustomOption }}
      getOptionLabel={getTZOptionLabel}
      getOptionValue={getTZOptionValue}
      searchKeys={getTZSearchKeys}
      classNamePrefix="react_select_scroll"
      isClearable
    />
  );
};

export default memo(TimeZoneSelector);
