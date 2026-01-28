import { memo } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Placeholder = (props) => {
  return (
    <SkeletonTheme baseColor="var(--fc-3)" highlightColor="var(--tc)">
      <Skeleton borderRadius={4} {...props} />
    </SkeletonTheme>
  );
};

export default memo(Placeholder);
