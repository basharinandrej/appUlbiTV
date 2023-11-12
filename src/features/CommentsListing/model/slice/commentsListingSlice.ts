import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {CommentsListingSliceSchema} from "../types/types";
import {fetchCommentsByArticleId} from "@features/CommentsListing/model/asyncActions/fetchCommentsByArticleId";
import {IComment} from "@entities/comment";

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
  }
})

export const commentsListingReducer = commentsListingSlice.reducer