import {StateSchema} from "@app/providers/StoreProvider";


export const getCommentsForArticle = (state: StateSchema) => state.comments?.articles
