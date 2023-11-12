import {Nullable} from '@shared/index'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchArticleDetailsById} from '../asyncAction/fetchArticleDetailsById'
import {Article} from '../types/article'
import {sendNewCommentForArticle} from "../asyncAction/sendNewCommentForArticle";

export interface ArticleDetailsSchema {
    data: Nullable<Article>
    isLoading: boolean
    error: Nullable<string>
}

const initialState: ArticleDetailsSchema = {
    data: null,
    isLoading: false,
    error: null
}

const articleDetailsSlice = createSlice({
    name: 'ArticleDetails',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticleDetailsById.pending,  (state) => {
                state.isLoading = true
            })
            .addCase(fetchArticleDetailsById.fulfilled,  (state, action: PayloadAction<Article>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchArticleDetailsById.rejected,  (state, action: PayloadAction<{msg: string}>) => {
                state.isLoading = false
                state.error = action.payload.msg
            })
            .addCase(sendNewCommentForArticle.rejected,  (state, action: PayloadAction<{msg: string}>) => {
                state.isLoading = false
                state.error = action.payload.msg
            })
    }
})

export const articleDetailsReducer = articleDetailsSlice.reducer