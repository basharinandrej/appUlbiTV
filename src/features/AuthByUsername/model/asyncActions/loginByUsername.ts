import {createAsyncThunk} from '@reduxjs/toolkit'
import {setUser, UserSchema} from '@entities/user'
import {LOCALSTORAGE_USER_KEY} from '@shared/constans/constans'
import {ThunkApiConfig} from '@app/providers/StoreProvider'
import {AxiosError} from "axios/index";

interface AuthData {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<UserSchema, AuthData, ThunkApiConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const {extra, dispatch , rejectWithValue} = thunkAPI

        try {
            const response = await extra.api.post<UserSchema>('/login3', authData)

            localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data))
            dispatch(setUser(response.data))

            return response.data
        } catch (err) {
            if(err instanceof AxiosError) {
                return rejectWithValue({msg: err.message})
            }
        }
    }
)
