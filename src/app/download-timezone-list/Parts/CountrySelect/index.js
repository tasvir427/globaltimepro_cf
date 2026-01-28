'use client';

import { memo } from 'react';
import { CustomSelect } from '@/Components';
import { useDL } from '@/Contexts';
import { countryOptions, placeholders } from '@/utils';

const CountrySelect = () => {
  const { country, handleCountry } = useDL();

  return (
    <CustomSelect
      isMulti
      options={countryOptions}
      placeholder={placeholders.country_select}
      value={country}
      onChange={handleCountry}
      classNamePrefix="tz_multi_select"
      isClearable
    />
  );
};

export default memo(CountrySelect);
