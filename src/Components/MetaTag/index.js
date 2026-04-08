import { memo } from 'react';

const MetaTag = ({ page, schemaData }) => {
  const scriptId = `${String(page || 'page').replace(/[^a-z0-9-]/gi, '-')}-ld`;

  return (
    <script
      id={scriptId}
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
};

export default memo(MetaTag);
