'use client';

import { memo, useEffect, useState } from 'react';

const ClientOnly = ({ children, placeholder = null }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return placeholder;
  }

  return children;
};

export default memo(ClientOnly);
