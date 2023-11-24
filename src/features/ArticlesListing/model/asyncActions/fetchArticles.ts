import { createAsyncThunk } from '@reduxjs/toolkit'
import {Article} from '@entities/article'
import {ThunkApiConfig} from '@app/providers/StoreProvider'
import { getTypeSort, getOrderSort, getSearch } from '@features/FiltersForArticlesListing/model/selectors/selectors'

export const fetchArticles = createAsyncThunk<Array<Article>, void, ThunkApiConfig<string>>(
    'articles/fetchArticles',
    async (_, thunkAPI ) => {
      const {extra, rejectWithValue, getState} = thunkAPI
      const state = getState()

      const typeSort = getTypeSort(state)
      const orderSort = getOrderSort(state)
      const search = getSearch(state)

      try {
        const response = await extra.api.get<Array<Article>>('/articles', {
          params: {
            _sort: typeSort,
            _order: orderSort,
            q: search,
            _page: 1,
            _limit: 8
          }
        })

        return response.data
      } catch (err) {
        return rejectWithValue({msg: err.response?.data?.message})
      }
    }
)