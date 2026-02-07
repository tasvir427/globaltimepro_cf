import { useCallback, useEffect, useMemo, useState } from 'react';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

const QUERY_CHANGE_EVENT = 'queryparamschange';

const normalizeQueryString = (value) => {
  if (!value) return '';
  return value.startsWith('?') ? value.slice(1) : value;
};

const useQueryParamsWithHistory = (initialQueryString = '') => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const [queryString, setQueryString] = useState(() =>
    normalizeQueryString(initialQueryString),
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const readLocation = () => {
      const nextQuery = normalizeQueryString(window.location.search || '');
      setQueryString((prev) => (prev === nextQuery ? prev : nextQuery));
    };

    readLocation();
    window.addEventListener('popstate', readLocation);
    window.addEventListener(QUERY_CHANGE_EVENT, readLocation);

    return () => {
      window.removeEventListener('popstate', readLocation);
      window.removeEventListener(QUERY_CHANGE_EVENT, readLocation);
    };
  }, []);

  const queryObj = useMemo(() => {
    if (!queryString) return {};
    return Object.fromEntries(new URLSearchParams(queryString).entries());
  }, [queryString]);

  const updateSearchParam = useCallback(
    (params, isReset, isReplace) => {
      if (typeof window === 'undefined') return;

      const baseQuery = normalizeQueryString(window.location.search || '');
      const sParams = new URLSearchParams(baseQuery);
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

      setQueryString(newQueryString);
      window.dispatchEvent(new Event(QUERY_CHANGE_EVENT));
    },
    [],
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
