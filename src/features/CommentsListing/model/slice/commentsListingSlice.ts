import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CommentsListingSliceSchema} from "../types/types";
import {fetchCommentsByArticleId} from "@features/CommentsListing/model/asyncActions/fetchCommentsByArticleId";
import {IComment} from "@entities/comment";
import {sendNewComment} from "@features/AddNewComment/model/asyncAction/sendNewComment";


const initialState: CommentsListingSliceSchema = {
  articles: []
}

const commentsListingSlice = createSlice({
  name: 'CommentsListing',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentsByArticleId.fulfilled, (state, action:PayloadAction<IComment[]>) => {
        state.articles = action.payload
      })
      .addCase(sendNewComment.fulfilled, (state: any, action: PayloadAction<IComment>) => {
        const isArticles = action.payload.articleId

        if(isArticles) {
          return {
            ...state,
            articles: [action.payload, ...state.articles]
          }
        } else {
          return state
        }

      })
  }
})

export const commentsListingReducer = commentsListingSlice.reducer