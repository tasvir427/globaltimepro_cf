import { memo } from 'react';
import { DST_PARAMS, PATHS } from '@/paramsData';
import DSTChecker from '@/app/dst-checker/page';
import { getMetaData } from '@/utils';

export const generateStaticParams = () => {
  return DST_PARAMS;
};

export const generateMetadata = async ({ params }) => {
  const p = await params;
  const page = p.city ? `dst-in/${p.city}` : PATHS.dstChecker;
  const m = await getMetaData(page, PATHS.dstChecker);

  return { ...m };
};

const DSTIn = (props) => {
  return <DSTChecker {...props} />;
};

export default memo(DSTIn);
