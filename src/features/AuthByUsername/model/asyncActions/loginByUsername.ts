import {createAsyncThunk} from "@reduxjs/toolkit";
import {setUser, UserSchema} from "@entities/user";
import axios from "axios";

interface AuthData {
    username: string
    password: string
}

export const loginByUsername = createAsyncThunk<UserSchema, AuthData, {rejectValue: {msg: string}}>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<UserSchema>('http://localhost:8000/login', authData)

            thunkAPI.dispatch(setUser(response.data))

            return response.data
        } catch (err) {
            return thunkAPI.rejectWithValue({msg: err.response.data.message || err.message})
        }
    }
)