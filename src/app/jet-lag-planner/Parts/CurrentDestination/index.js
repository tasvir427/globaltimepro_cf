'use client';

import { memo } from 'react';
import { CustomSwitch } from '@/Components';
import { useJL } from '@/Contexts';
import { inputLabels } from '@/utils';

const CurrentDestination = () => {
  const { isDestinationTZCurrent, onDestinationTZSwitchChange } = useJL();

  return (
    <CustomSwitch
      label={inputLabels.current_departure_city}
      onChange={onDestinationTZSwitchChange}
      checked={isDestinationTZCurrent}
    />
  );
};

export default memo(CurrentDestination);
