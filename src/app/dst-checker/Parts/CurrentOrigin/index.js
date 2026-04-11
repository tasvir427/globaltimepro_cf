'use client';

import { memo } from 'react';
import CustomSwitch from '@/Components/CustomSwitch';
import { useDST } from '@/Contexts/DSTContext';
import { inputLabels } from '@/utils';

const CurrentOrigin = () => {
  const { isOriginTimeZoneCurrent, onOriginTimeZoneSwitchChange } = useDST();

  return (
    <CustomSwitch
      label={inputLabels.current_origin}
      onChange={onOriginTimeZoneSwitchChange}
      checked={isOriginTimeZoneCurrent}
    />
  );
};

export default memo(CurrentOrigin);
