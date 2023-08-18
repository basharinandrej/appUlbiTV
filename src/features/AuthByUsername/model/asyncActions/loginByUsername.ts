import {createAsyncThunk} from '@reduxjs/toolkit'
import {setUser, UserSchema} from '@entities/user'
import {LOCALSTORAGE_USER_KEY} from '@shared/constans/constans'
import {ThunkApiConfig} from '@app/providers/StoreProvider'

interface AuthData {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<UserSchema, AuthData, ThunkApiConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const {extra, dispatch , rejectWithValue} = thunkAPI

        try {
            const response = await extra.api.post<UserSchema>('/login', authData)

            localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data))
            dispatch(setUser(response.data))

            return response.data
        } catch (err) {
            return rejectWithValue({msg: err.message})
        }
    }
)
