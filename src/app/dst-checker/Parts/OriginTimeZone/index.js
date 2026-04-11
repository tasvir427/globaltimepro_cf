'use client';

import { memo } from 'react';
import CustomOption from '@/Components/CustomOption';
import CustomSelect from '@/Components/CustomSelect';
import { useDST } from '@/Contexts/DSTContext';
import { getTZOptionLabel, getTZOptionValue, placeholders } from '@/utils';

const OriginTimeZone = () => {
  const { updateSearchParam, tzList, originTimeZone, getTZSearchKeys } =
    useDST();

  return (
    <CustomSelect
      options={tzList}
      placeholder={placeholders.timezone}
      value={originTimeZone}
      onChange={(value) =>
        updateSearchParam({
          originTimeZone: getTZOptionValue(value) || '',
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

export default memo(OriginTimeZone);
