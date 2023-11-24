import {StateSchema} from "@app/providers/StoreProvider";

export const getTypeSort = (state: StateSchema) => state.filterArticles?.typeSort

export const getOrderSort = (state: StateSchema) => state.filterArticles?.orderSort

export const getSearch = (state: StateSchema) => state.filterArticles?.search