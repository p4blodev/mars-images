import { useEffect, useRef, useState } from 'react';
import { UseNearScreenType } from './useNearScreen.types';

const useNearScreen = ({
  distance = '50px',
  externalRef = null,
  once = true,
}: UseNearScreenType): any => {
  const [isNearScreen, setShow] = useState(false);
  const fromRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let observer: IntersectionObserver;

    const element = externalRef ? externalRef.current : fromRef.current;

    const onChange = (entries: any, observer: IntersectionObserver) => {
      const el = entries[0];

      if (el.isIntersecting) {
        setShow(true);
        once && observer.disconnect();
      } else {
        !once && setShow(false);
      }
    };

    // eslint-disable-next-line prefer-const
    observer = new IntersectionObserver(onChange, {
      rootMargin: distance,
    });

    if (element) observer.observe(element);

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, fromRef };
};

export default useNearScreen;
