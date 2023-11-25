import {createAsyncThunk} from "@reduxjs/toolkit";
import {Article} from "@entities/article";
import {ThunkApiConfig} from "@app/providers/StoreProvider";
import {getOrderSort, getSearch, getTypeSort} from "@features/FiltersForArticlesListing/model/selectors/selectors";

export const fetchArticlesNextPart = createAsyncThunk<Array<Article>, number, ThunkApiConfig<string>>(
    'articles/fetchArticlesNextPart',
    async (page, thunkAPI ) => {
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