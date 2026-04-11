'use client';

import { memo } from 'react';
import CustomSwitch from '@/Components/CustomSwitch';
import { useTZ } from '@/Contexts/TZContext';
import { inputLabels } from '@/utils';

const CurrentDestination = () => {
  const { isDestinationTimeZoneCurrent, onDestinationTimeZoneSwitchChange } =
    useTZ();

  return (
    <CustomSwitch
      label={inputLabels.current_destination}
      onChange={onDestinationTimeZoneSwitchChange}
      checked={isDestinationTimeZoneCurrent}
    />
  );
};

export default memo(CurrentDestination);
