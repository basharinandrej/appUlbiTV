import {StateSchema} from "@app/providers/StoreProvider";


export const getScrollPositionByPathname = (state: StateSchema, pathname: string) => {
  return state?.keepScrollPosition ? state?.keepScrollPosition[pathname] : 0
}