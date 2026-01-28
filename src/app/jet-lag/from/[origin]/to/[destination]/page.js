import { memo } from 'react';
import { JETLAG_PARAMS, PATHS } from '@/paramsData';
import JetLagPlanner from '@/app/jet-lag-planner/page';
import { getMetaData } from '@/utils';

export const generateStaticParams = () => {
  return JETLAG_PARAMS;
};

export const generateMetadata = async ({ params }) => {
  const p = await params;
  const page =
    p.origin && p.destination
      ? `jet-lag/from/${p.origin}/to/${p.destination}`
      : PATHS.jetLagPlanner;
  const m = await getMetaData(page, PATHS.jetLagPlanner);

  return { ...m };
};

const JetLagFromTo = (props) => {
  return <JetLagPlanner {...props} />;
};

export default memo(JetLagFromTo);
