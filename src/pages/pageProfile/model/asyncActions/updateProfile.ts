import {createAsyncThunk} from "@reduxjs/toolkit";
import {Profile} from "@pages/pageProfile/model/types/types";
import {ThunkApiConfig} from "@app/providers/StoreProvider";


export const updateProfile = createAsyncThunk<Profile, void, ThunkApiConfig<string>>(
    'profile/updateProfile',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI

        const profileData = getState().profile.data

        try {
            const response = await extra.api.post<Profile>('/profile', profileData)

            return response.data
        } catch (err) {
            return rejectWithValue({msg: err.response?.data?.message || err.message})
        }
    }
)