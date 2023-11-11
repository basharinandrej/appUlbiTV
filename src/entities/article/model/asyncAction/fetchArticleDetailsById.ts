import { createAsyncThunk } from '@reduxjs/toolkit'
import {ThunkApiConfig} from "@app/providers/StoreProvider";
import {Article} from "../types/article";

export const fetchArticleDetailsById = createAsyncThunk<Article, string, ThunkApiConfig<string>>(
    'article/fetchArticleDetailsById',
    async (articleId, thunkAPI ) => {
        const {extra, rejectWithValue} = thunkAPI

        try {
            const response = await extra.api.get<Article>('/articles/'+articleId + '?_embed=comments')

            return response.data
        } catch (err) {
            return rejectWithValue({msg: err.response?.data?.message})
        }
    }
)