import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {LoginSchema} from "../types/LoginSchema";
import {loginByUsername} from "../asyncActions/loginByUsername";

const initialState: LoginSchema = {
    password: '',
    username: '',
    isLoading: false,
    error: ''
}

const loginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        resetState: (state) => {
            state.username = ''
            state.password = ''
            state.isLoading = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state) => {
                state.error = ''
                state.isLoading = true
            })
            .addCase(loginByUsername.fulfilled, (state) => {
                state.isLoading = false
            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload.msg
            })
    }
})


export const {setPassword, setUsername, resetState} = loginSlice.actions
export const loginReducer = loginSlice.reducer