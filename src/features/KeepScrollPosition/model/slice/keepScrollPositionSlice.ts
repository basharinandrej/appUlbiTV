import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {KeepScrollPositionSliceSchema, PayloadKeepScroll} from "../types/types";

const initialState: KeepScrollPositionSliceSchema = {}

const keepScrollPositionSlice = createSlice({
  name: 'keepScrollPosition',
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<PayloadKeepScroll>) => {
      state[action.payload?.route] = action.payload?.position
    }
  }
})

export const keepScrollPositionReducer = keepScrollPositionSlice.reducer
export const keepScrollPosition = keepScrollPositionSlice.actions
