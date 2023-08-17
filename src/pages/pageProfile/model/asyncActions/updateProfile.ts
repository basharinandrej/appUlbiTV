import {createAsyncThunk} from "@reduxjs/toolkit";
import {Profile} from "@pages/pageProfile/model/types/types";
import {ThunkApiConfig} from "@app/providers/StoreProvider";
import {getProfileData} from "../selectors/getProfileData";
import {getFormData} from "../selectors/getFormData";


export const updateProfile = createAsyncThunk<Profile, void, ThunkApiConfig<string>>(
    'profile/updateProfile',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, getState} = thunkAPI

        const profile = getProfileData(getState())
        const form = getFormData(getState())

        const profileData: Profile = {
            ...profile,
            ...form
        }

        try {
            const response = await extra.api.put<Profile>('/profile', profileData)

            return response.data
        } catch (err) {
            return rejectWithValue({msg: err.response?.data?.message || err.message})
        }
    }
)