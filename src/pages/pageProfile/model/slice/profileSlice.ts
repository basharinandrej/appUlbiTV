import {Profile, ProfileSchema} from "@pages/pageProfile/model/types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchDataProfile} from "@pages/pageProfile/model/asyncActions/fetchDataProfile";

const initialState: ProfileSchema = {
    data: null,
    isLoading: false,
    error: null
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDataProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchDataProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.data = action.payload
                state.isLoading = false
            })
            .addCase(fetchDataProfile.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.msg
            })
    }
})

export const profileReducer = profileSlice.reducer