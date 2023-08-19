import {Article} from "../types/article";
import {Nullable} from "@shared/index";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchArticles} from "@features/ArticlesListing/model/asyncActions/fetchArticles";

export interface ArticlesSchema {
    data: Nullable<Array<Article>>
    isLoading: boolean
    error: Nullable<string>
}

const initialState: ArticlesSchema = {
    data: null,
    isLoading: false,
    error: null
}

const articlesSlice = createSlice({
    name: 'Articles',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending,  (state) => {
                state.isLoading = true
            })
            .addCase(fetchArticles.fulfilled,  (state, action: PayloadAction<Array<Article>>) => {
                state.isLoading = false
                state.data = action.payload
            })
            .addCase(fetchArticles.rejected,  (state, action: PayloadAction<{msg: string}>) => {
                state.isLoading = false
                state.error = action.payload.msg
            })

    }
})

export const articleReducer = articlesSlice.reducer