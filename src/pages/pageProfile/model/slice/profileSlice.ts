import {Profile, ProfileSchema} from "@pages/pageProfile/model/types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchDataProfile} from "@pages/pageProfile/model/asyncActions/fetchDataProfile";

const initialState: ProfileSchema = {
    data: null,
    isLoading: false,
    isEditable: false,
    error: null
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setIsEditable: (state) => {
            state.isEditable = true
        },
        cancelIsEditable: (state) => {
            state.isEditable = false
        }
    },
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
export const {setIsEditable, cancelIsEditable} = profileSlice.actions