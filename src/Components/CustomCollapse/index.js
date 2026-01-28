'use client';

import { memo } from 'react';
import { useCollapse } from 'react-collapsed';

const CustomCollapse = ({ children, isExpanded }) => {
  const { getCollapseProps } = useCollapse({
    isExpanded,
  });

  return <div {...getCollapseProps()}>{children}</div>;
};

export default memo(CustomCollapse);
