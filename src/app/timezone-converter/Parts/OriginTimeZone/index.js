'use client';

import { memo } from 'react';
import { CustomOption, CustomSelect } from '@/Components';
import { useTZ } from '@/Contexts';
import { getTZOptionLabel, getTZOptionValue, placeholders } from '@/utils';

const OriginTimeZone = () => {
  const { updateSearchParam, tzList, originTimeZone, getTZSearchKeys } =
    useTZ();

  return (
    <CustomSelect
      options={tzList}
      placeholder={placeholders.originTimeZone}
      value={originTimeZone}
      onChange={(value) => {
        updateSearchParam({
          originTimeZone: getTZOptionValue(value) || '',
        });
      }}
      components={{ Option: CustomOption }}
      getOptionLabel={getTZOptionLabel}
      getOptionValue={getTZOptionValue}
      searchKeys={getTZSearchKeys}
      classNamePrefix="react_select_scroll"
      isClearable
    />
  );
};

export default memo(OriginTimeZone);
