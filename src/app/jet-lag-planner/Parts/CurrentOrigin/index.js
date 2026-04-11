'use client';

import { memo } from 'react';
import CustomSwitch from '@/Components/CustomSwitch';
import { useJL } from '@/Contexts/JLContext';
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
