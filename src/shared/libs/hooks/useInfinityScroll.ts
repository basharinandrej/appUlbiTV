import {MutableRefObject, useEffect} from "react";

interface useObserverIntersectionScroll {
  callback: () => void
  refRootElement: MutableRefObject<HTMLDivElement>
  refTargetElement: MutableRefObject<HTMLDivElement>
}

export function useInfinityScroll({
   callback,
   refRootElement,
   refTargetElement
}: useObserverIntersectionScroll) {

  useEffect(() => {
    const refTarget = refTargetElement

    const options = {
      root: refRootElement.current,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) {
        callback()
      }
    }, options);
    observer.observe(refTarget.current)

    return () => {
      refTarget.current && observer.unobserve(refTarget.current)
    }
  }, [refTargetElement, refTargetElement, callback])
}