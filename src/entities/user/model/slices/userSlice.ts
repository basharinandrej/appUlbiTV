import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {SliceCaseReducers} from "@reduxjs/toolkit/src/createSlice";
import { UserSchema } from '../types/types'
import {LOCALSTORAGE_USER_KEY} from "@shared/constans/constans";

const initialState: UserSchema = {
    id: null,
    username: ''
}

interface UserSlice extends UserSchema {}
interface UserSliceMapReducer extends SliceCaseReducers<UserSlice> {
    setUser: (state: UserSlice, action:PayloadAction<UserSchema>) => void
    logout: (state: UserSlice) => void
    initUser: (state: UserSlice) => void
}
type NameUserSlice = 'user'


export const userSlice = createSlice<UserSlice, UserSliceMapReducer, NameUserSlice>({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id
            state.username = action.payload.username
        },
        initUser: (state) => {
            const user: UserSchema | null = JSON.parse(localStorage.getItem(LOCALSTORAGE_USER_KEY))
            state.id = user.id
            state.username = user.username
        },
        logout: (state) => {
            localStorage.removeItem(LOCALSTORAGE_USER_KEY)
            state.id = null
            state.username = ''
        }
    }
})

export const userReducer = userSlice.reducer
export const {setUser, logout, initUser} = userSlice.actions
