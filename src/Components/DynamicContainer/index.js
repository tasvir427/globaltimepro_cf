'use client';

import { memo, useRef } from 'react';
import { useResizeObserver } from '@/Hooks';

const DynamicContainer = ({ children, style, ...rest }) => {
  const content = useRef(null);
  const rect = useResizeObserver(content);

  return (
    <div
      {...rest}
      style={{
        transition: '0.5s',
        height: `${rect.height}px`,
        overflow: 'hidden',
        ...style,
      }}
    >
      <div
        ref={content}
        style={{
          width: '100%',
          height: 'fit-content',
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default memo(DynamicContainer);
