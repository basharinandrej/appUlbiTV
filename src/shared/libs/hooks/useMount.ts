import {useEffect} from "react";

type Fn = () => void
export const useMount = (fn: Fn) => useEffect(fn, [])