import {createSlice} from "@reduxjs/toolkit";
import {ViewListing} from "../enums/enums";

export interface ListingLayoutSwitcherSliceSchema {
  viewListing: ViewListing
}

const initialState:ListingLayoutSwitcherSliceSchema = {
  viewListing: ViewListing.ROW
}

const listingLayoutSwitcherSlice = createSlice({
  name: 'listingLayoutSwitcher',
  initialState,
  reducers: {
    toggleViewListing: (state) => {
      state.viewListing = state.viewListing === ViewListing.GRID ? ViewListing.ROW : ViewListing.GRID
    }
  },
})

export const {toggleViewListing} = listingLayoutSwitcherSlice.actions
export const listingLayoutSwitcherReducer = listingLayoutSwitcherSlice.reducer
