import {createSlice} from "@reduxjs/toolkit";
import {ViewListing} from "../enums/enums";
import {LISTING_VIEW_KEY} from "@shared/index";

export interface ListingLayoutSwitcherSliceSchema {
  viewListing: ViewListing
}

const initialState:ListingLayoutSwitcherSliceSchema = {
  viewListing: JSON.parse(localStorage.getItem(LISTING_VIEW_KEY) as ViewListing)
}

const listingLayoutSwitcherSlice = createSlice({
  name: 'listingLayoutSwitcher',
  initialState,
  reducers: {
    toggleViewListing: (state) => {
      const viewListing = state.viewListing === ViewListing.GRID ? ViewListing.ROW : ViewListing.GRID
      localStorage.setItem(LISTING_VIEW_KEY, JSON.stringify(viewListing))

      state.viewListing = viewListing
    }
  },
})

export const {toggleViewListing} = listingLayoutSwitcherSlice.actions
export const listingLayoutSwitcherReducer = listingLayoutSwitcherSlice.reducer
