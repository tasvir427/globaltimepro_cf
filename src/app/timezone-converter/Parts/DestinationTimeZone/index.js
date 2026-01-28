'use client';

import { memo } from 'react';
import { CustomOption, CustomSelect } from '@/Components';
import { useTZ } from '@/Contexts';
import {
  getTZOptionLabel,
  getTZOptionValue,
  joinValues,
  placeholders,
} from '@/utils';

const DestinationTimeZone = () => {
  const { updateSearchParam, tzList, destinationTimeZone, getTZSearchKeys } =
    useTZ();

  return (
    <CustomSelect
      isMulti
      options={tzList}
      placeholder={placeholders.destinationTimeZone}
      value={destinationTimeZone}
      onChange={(value) => {
        updateSearchParam({
          destinationTimeZone: joinValues(value),
        });
      }}
      components={{ Option: CustomOption }}
      getOptionLabel={getTZOptionLabel}
      getOptionValue={getTZOptionValue}
      searchKeys={getTZSearchKeys}
      classNamePrefix="tz_multi_select"
      isClearable
    />
  );
};

export default memo(DestinationTimeZone);
