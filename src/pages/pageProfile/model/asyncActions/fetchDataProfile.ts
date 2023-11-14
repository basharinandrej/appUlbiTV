import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkApiConfig} from '@app/providers/StoreProvider'
import {Profile} from '@pages/pageProfile/model/types/types'


export const fetchDataProfile = createAsyncThunk<Profile, string, ThunkApiConfig<string>>(
    'profile/fetchDataProfile',
    async (userId, thunkAPI) => {
        const {extra, rejectWithValue} = thunkAPI

        try {
            const response = await extra.api.get<Profile[]>('/profile', {
              params: {
                id: userId
              }
            })

            return response.data[0]
        } catch (err) {
            return rejectWithValue({msg: err.response?.data?.message || err.message})
        }
    }
)