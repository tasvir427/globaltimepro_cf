'use client';

import { memo } from 'react';
import Switch from 'react-switch';
import { ClientOnly, CustomSwitchFallback, InputLabel } from '../index';

const CustomSwitch = ({ label, ...rest }) => {
  return (
    <label>
      <InputLabel>{label}</InputLabel>
      <ClientOnly placeholder={<CustomSwitchFallback />}>
        <Switch
          uncheckedIcon={false}
          checkedIcon={false}
          offColor="#b9c3d3"
          onColor="#1565C0"
          offHandleColor="#475569"
          onHandleColor="#FFFFFF"
          activeBoxShadow="0 0 2px rgba(0, 0, 0, 0.2)"
          width={30}
          height={15}
          handleDiameter={10}
          {...rest}
        />
      </ClientOnly>
    </label>
  );
};

export default memo(CustomSwitch);
