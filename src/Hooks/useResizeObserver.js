import { useEffect, useRef, useState } from 'react';

const useResizeObserver = (ref) => {
  const [element, setElement] = useState(null);
  const [rect, setRect] = useState({});
  const observer = useRef(null);

  const cleanOb = () => {
    if (observer.current) {
      observer.current.disconnect();
    }
  };

  useEffect(() => {
    setElement(ref.current);
  }, [ref]);

  useEffect(() => {
    if (!element) return;
    cleanOb();

    const ob = (observer.current = new ResizeObserver(([entry]) => {
      setRect(entry.target.getBoundingClientRect());
    }));
    ob.observe(element);

    return () => {
      cleanOb();
    };
  }, [element]);

  return rect;
};

export default useResizeObserver;
