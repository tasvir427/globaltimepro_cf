'use client';

import { memo } from 'react';
import { CustomSwitch } from '@/Components';
import { useJL } from '@/Contexts';
import { inputLabels } from '@/utils';

const CurrentOrigin = () => {
  const { isDepartureTZCurrent, onDepartureTZSwitchChange } = useJL();

  return (
    <CustomSwitch
      label={inputLabels.current_departure_city}
      onChange={onDepartureTZSwitchChange}
      checked={isDepartureTZCurrent}
    />
  );
};

export default memo(CurrentOrigin);
