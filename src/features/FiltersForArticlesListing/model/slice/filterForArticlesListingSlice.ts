import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {OrderSort} from '@shared/index'
import {TypeSort} from '../types/types'


export interface filterArticlesSchema {
  typeSort: TypeSort,
  orderSort: OrderSort
  search: string
}

const initialState: filterArticlesSchema = {
  typeSort: TypeSort.VIEW,
  orderSort: 'asc',
  search: ''
}

const filterArticlesSlice = createSlice({
  name: 'filterArticles',
  initialState,
  reducers: {
    setOrderSort: (state, action: PayloadAction<OrderSort>) => {
      state.orderSort = action.payload
    },
    setTypeSort: (state, action: PayloadAction<TypeSort>) => {
      state.typeSort = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
  }
})

export const filterArticlesReducer = filterArticlesSlice.reducer
export const {setOrderSort, setTypeSort, setSearch} = filterArticlesSlice.actions
