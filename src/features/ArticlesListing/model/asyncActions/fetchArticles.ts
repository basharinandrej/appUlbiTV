import { createAsyncThunk } from '@reduxjs/toolkit'
import {Article} from '@entities/article'
import {ThunkApiConfig} from '@app/providers/StoreProvider'
import { getTypeSort, getOrderSort, getSearch } from '@features/FiltersForArticlesListing/model/selectors/selectors'

const addQueryParams = (params: Record<string, string>) => {
  const searchParams = new URLSearchParams(window.location.search)
  Object.entries(params).forEach(([key, value]) => {
    if(value) {
      searchParams.set(key, value)
    } else {
      searchParams.delete(key)
    }
  })
  window.history.pushState(null, '',`?${searchParams.toString()}`)
}


export const fetchArticles = createAsyncThunk<Array<Article>, void, ThunkApiConfig<string>>(
    'articles/fetchArticles',
    async (_, thunkAPI ) => {
      const {extra, rejectWithValue, getState} = thunkAPI
      const state = getState()

      const typeSort = getTypeSort(state)
      const orderSort = getOrderSort(state)
      const search = getSearch(state)

      addQueryParams({
        _sort: typeSort,
        _order: orderSort,
        q: search
      })

      try {
        const response = await extra.api.get<Array<Article>>('/articles', {
          params: {
            _sort: typeSort,
            _order: orderSort,
            q: search,
            _page: 1,
            _limit: 4
          }
        })

        return response.data
      } catch (err) {
        return rejectWithValue({msg: err.response?.data?.message})
      }
    }
)