import {useEffect} from "react";

type Fn = () => void
export const useUnMount = (fn: Fn) => useEffect(() => fn, [])
