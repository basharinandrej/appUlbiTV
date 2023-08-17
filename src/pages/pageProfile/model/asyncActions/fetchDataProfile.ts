import {createAsyncThunk} from "@reduxjs/toolkit";
import {ThunkApiConfig} from "@app/providers/StoreProvider";
import {Profile} from "@pages/pageProfile/model/types/types";


export const fetchDataProfile = createAsyncThunk<Profile, void, ThunkApiConfig<string>>(
    'profile/fetchDataProfile',
    async (_, thunkAPI) => {
        const {extra , rejectWithValue} = thunkAPI

        try {
            const response = await extra.api.get<Profile>('/profile')

            return response.data
        } catch (err) {
            return rejectWithValue({msg: err.response?.data?.message || err.message})
        }
    }
)