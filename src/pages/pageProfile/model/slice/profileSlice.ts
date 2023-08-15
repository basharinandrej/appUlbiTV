import {Profile, ProfileSchema} from "@pages/pageProfile/model/types/types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchDataProfile} from "../../model/asyncActions/fetchDataProfile";
import {updateProfile} from "../../model/asyncActions/updateProfile";

const initialState: ProfileSchema = {
    data: null,
    form: null,
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
            state.form = state.data
        },
        editProfile: (state, action: PayloadAction<Profile>) => {
            state.form = {
                ...state.form,
                ...state.data,
                ...action.payload
            }
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

            .addCase(updateProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isEditable = false
                state.data = action.payload
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.error = action.payload.msg
            })
    }
})

export const profileReducer = profileSlice.reducer
export const {setIsEditable, cancelIsEditable, editProfile} = profileSlice.actions