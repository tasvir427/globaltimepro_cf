'use client';

import { memo } from 'react';
import { CustomSwitch } from '@/Components';
import { useTZ } from '@/Contexts';
import { inputLabels } from '@/utils';

const RealTimeSwitch = () => {
  const { isRealTime, updateSearchParam, timeNowTZ, originTimeZone } = useTZ();

  return (
    <CustomSwitch
      label={inputLabels.isRealTime}
      onChange={(checked) =>
        updateSearchParam({
          isRealTime: checked || 'false',
          originTime: timeNowTZ(originTimeZone?.timezone),
        })
      }
      checked={isRealTime}
    />
  );
};

export default memo(RealTimeSwitch);
