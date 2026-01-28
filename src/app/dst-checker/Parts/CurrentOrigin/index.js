'use client';

import { memo } from 'react';
import { CustomSwitch } from '@/Components';
import { useDST } from '@/Contexts';
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
