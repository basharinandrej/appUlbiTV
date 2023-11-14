import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkApiConfig} from '@app/providers/StoreProvider'
import {Profile} from '@pages/pageProfile/model/types/types'
import {setIsEditable} from "../slice/profileSlice";
import {getUserData} from "@entities/user";


export const fetchDataProfile = createAsyncThunk<Profile, string, ThunkApiConfig<string>>(
  'profile/fetchDataProfile',
  async (profileId, thunkAPI) => {
    const {extra, rejectWithValue, dispatch, getState} = thunkAPI

    try {
      const response = await extra.api.get<Profile[]>('/profiles', {
        params: {
          id: profileId
        }
      })

      const profile = response.data[0]
      const user = getUserData(getState())

      if(profile.id === user.id) {
        dispatch(setIsEditable())
      }
      return profile
    } catch (err) {
        return rejectWithValue({msg: err.response?.data?.message || err.message})
    }
  }
)