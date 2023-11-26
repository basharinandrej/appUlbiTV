import {useCallback, useRef} from "react";

//todo check on correct func
export const useThrottle = (cb: (...args: any[]) => void, delay = 500) => {
  const ref = useRef<boolean>(true)


  return useCallback((...args) => {
    if(ref.current) {
      cb(...args)
      ref.current = false
    }

    setTimeout(() => {
      ref.current = true
    }, delay)

  }, [ref])
}