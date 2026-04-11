'use client';

import { memo } from 'react';
import CustomSwitch from '@/Components/CustomSwitch';
import { useTZ } from '@/Contexts/TZContext';
import { inputLabels } from '@/utils';

const CurrentOrigin = () => {
  const { isOriginTimeZoneCurrent, onOriginTimeZoneSwitchChange } = useTZ();

  return (
    <CustomSwitch
      label={inputLabels.current_origin}
      onChange={onOriginTimeZoneSwitchChange}
      checked={isOriginTimeZoneCurrent}
    />
  );
};

export default memo(CurrentOrigin);
