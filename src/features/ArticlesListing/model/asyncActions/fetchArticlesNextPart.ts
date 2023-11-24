import {createAsyncThunk} from "@reduxjs/toolkit";
import {Article} from "@entities/article";
import {ThunkApiConfig} from "@app/providers/StoreProvider";

export const fetchArticlesNextPart = createAsyncThunk<Array<Article>, number, ThunkApiConfig<string>>(
    'articles/fetchArticlesNextPart',
    async (page, thunkAPI ) => {
      const {extra, rejectWithValue} = thunkAPI
      try {
        const response = await extra.api.get<Array<Article>>('/articles', {
          params: {
            _order: 'desc',
            _page: page,
            _limit: 4
          }
        })

        return response.data
      } catch (err) {
        return rejectWithValue({msg: err.response?.data?.message})
      }
    }
)