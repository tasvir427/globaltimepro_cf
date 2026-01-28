import { useCallback, useMemo } from 'react';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { toast } from 'react-toastify';

const useQueryParamsWithHistory = () => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();

  const queryObj = useMemo(
    () => Object.fromEntries(searchParams.entries()),
    [queryString],
  );

  const updateSearchParam = useCallback(
    (params, isReset, isReplace) => {
      const sParams = new URLSearchParams(queryString);
      const query = Object.fromEntries(sParams.entries());
      const newParams = { ...query, ...params };

      Object.keys(newParams).forEach((key) => {
        if (newParams[key] && (!isReset || params[key])) {
          sParams.set(key, newParams[key]);
        } else {
          sParams.delete(key);
        }
      });

      const newQueryString = sParams.toString();
      const newUrl = `?${newQueryString}`;
      if (isReplace) {
        window.history.replaceState(null, '', newUrl);
      } else {
        window.history.pushState(null, '', newUrl);
      }
    },
    [queryString],
  );

  const reset = useCallback(() => {
    updateSearchParam({ reset: true }, true);
  }, [updateSearchParam]);

  const undo = useCallback(() => router.back(), [router]);
  const redo = useCallback(() => router.forward(), [router]);

  const copyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      toast('Shareable link copied to clipboard!');
    });
  }, []);

  return {
    updateSearchParam,
    reset,
    undo,
    redo,
    copyLink,
    queryString,
    queryObj,
    params,
    pathname,
  };
};

export default useQueryParamsWithHistory;
