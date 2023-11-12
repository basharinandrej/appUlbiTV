import {StateSchema} from "@app/providers/StoreProvider";


export const getCommentsForArticle = (state: StateSchema) => {
  return state.comments?.articles
}