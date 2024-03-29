import {Article} from '@entities/article'
import {Nullable} from '@shared/index'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchArticles} from '../../model/asyncActions/fetchArticles'
import {fetchArticlesNextPart} from '../../model/asyncActions/fetchArticlesNextPart'
import {mapArticlesToArticlesWithOnlyOneTextBlock} from "../utils/mapArticlesToArticlesWithOnlyOneTextBlock";

export interface ArticlesSchema {
    data: Nullable<Array<Article>>
    isLoading: boolean
    error: Nullable<string>
    currentPage: number
    hasMore: boolean
}

const initialState: ArticlesSchema = {
    data: null,
    isLoading: false,
    error: null,
    currentPage: 1,
    hasMore: false
}

const articlesSlice = createSlice({
    name: 'Articles',
    initialState,
    reducers: {
        resetCurrentPage: (state) => {
            state.currentPage = 1
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticles.pending,  (state) => {
                state.isLoading = true
            })
            .addCase(fetchArticles.fulfilled,  (state, action: PayloadAction<Array<Article>>) => {
                const articles = action.payload

                state.isLoading = false
                state.data = mapArticlesToArticlesWithOnlyOneTextBlock(action.payload)

                if(articles.length) {
                    state.hasMore = articles.length > 0
                }
            })
            .addCase(fetchArticles.rejected,  (state, action: PayloadAction<{msg: string}>) => {
                state.isLoading = false
                state.error = action.payload.msg
            })

            .addCase(fetchArticlesNextPart.fulfilled,  (state, action: PayloadAction<Array<Article>>) => {
                const articles = action.payload

                state.hasMore = articles.length > 0
                state.isLoading = false

                if(articles.length) {
                    state.data = state.data.concat(mapArticlesToArticlesWithOnlyOneTextBlock(articles))
                    state.currentPage = state.currentPage + 1
                }

            })

    }
})

export const articleReducer = articlesSlice.reducer
export const actionsArticleListing = articlesSlice.actions