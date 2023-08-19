import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/types'
import {LOCALSTORAGE_USER_KEY} from '@shared/constans/constans'

const initialState: UserSchema = {
    id: null,
    username: '',
    userWasInit: false
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
            const userKey = localStorage.getItem(LOCALSTORAGE_USER_KEY)

            const user: UserSchema = userKey && JSON.parse(userKey)
            state.id = user?.id
            state.username = user?.username
            state.userWasInit = true
        },
        logout: (state) => {
            localStorage.removeItem(LOCALSTORAGE_USER_KEY)
            state.id = null
            state.username = ''
        }
    }
})

export const userReducer = userSlice.reducer
export const { setUser, initUser, logout } = userSlice.actions
