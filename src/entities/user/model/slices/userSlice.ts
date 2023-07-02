import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/types'
import {LOCALSTORAGE_USER_KEY} from "@shared/constans/constans";

const initialState: UserSchema = {
    id: null,
    username: ''
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id
            state.username = action.payload.username
        },
        initUser: (state) => {
            const user: UserSchema = JSON.parse(localStorage.getItem(LOCALSTORAGE_USER_KEY))
            state.id = user?.id
            state.username = user?.username
        }
    }
})

export const userReducer = userSlice.reducer
export const { setUser, initUser } = userSlice.actions
