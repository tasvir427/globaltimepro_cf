'use client';

import { memo } from 'react';
import { CustomSwitch } from '@/Components';
import { useTZ } from '@/Contexts';
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
