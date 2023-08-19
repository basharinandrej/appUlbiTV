import { createAsyncThunk } from '@reduxjs/toolkit'
import {Article} from "@entities/article";
import {ThunkApiConfig} from "@app/providers/StoreProvider";

export const fetchArticles = createAsyncThunk<Array<Article>, void, ThunkApiConfig<string>>(
    'articles/fetchArticles',
    async (_, thunkAPI ) => {
        const {extra, rejectWithValue} = thunkAPI

        try {
            const response = await extra.api.get<Array<Article>>('/articles')

            return response.data
        } catch (err) {
            return rejectWithValue({msg: err.response?.data?.message})
        }
    }
)