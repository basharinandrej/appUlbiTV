import {StateSchema} from "@app/providers/StoreProvider";

export const getCurrentPage = (state: StateSchema) => state.articles?.currentPage
export const getHasMore = (state: StateSchema) => state.articles?.hasMore