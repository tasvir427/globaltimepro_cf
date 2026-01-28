import { memo } from 'react';
import Script from 'next/script';

const MetaTag = ({ page, schemaData }) => (
  <Script type="application/ld+json" id={`${page}-ld`}>
    {JSON.stringify(schemaData)}
  </Script>
);

export default memo(MetaTag);
