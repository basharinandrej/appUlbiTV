import {Profile, ProfileSchema} from '@pages/pageProfile/model/types/types'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {fetchDataProfile} from '../../model/asyncActions/fetchDataProfile'
import {updateProfile} from '../../model/asyncActions/updateProfile'

const initialState: ProfileSchema = {
    data: null,
    form: null,
    isLoading: false,
    isEditingMode: false,
    error: null
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setisEditingMode: (state) => {
            state.isEditingMode = true
        },
        cancelIsEditable: (state) => {
            state.isEditingMode = false
            state.form = state.data
        },
        editProfile: (state, action: PayloadAction<Partial<Profile>>) => {
            state.form = {
                ...state.form,
                ...action.payload,
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

            .addCase(updateProfile.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isEditingMode = false
                state.isLoading = false
                state.data = action.payload
                state.form = null
            })
            .addCase(updateProfile.rejected, (state, action) => {
                state.error = action.payload.msg
                state.isLoading = false
            })
    }
})

export const profileReducer = profileSlice.reducer
export const {setisEditingMode, cancelIsEditable, editProfile} = profileSlice.actions