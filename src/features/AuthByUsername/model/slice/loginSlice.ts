import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginSchema} from "../types/LoginSchema";

const initialState: LoginSchema = {
    password: '',
    username: '',
    isLoading: false
}

const loginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setLogin: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        }
    }
})


export const {setPassword, setLogin} = loginSlice.actions
export const loginReducer = loginSlice.reducer