import {StateSchema} from '@app/providers/StoreProvider'


export const getIsLoadingArticles = (state: StateSchema) => state.articles?.isLoading