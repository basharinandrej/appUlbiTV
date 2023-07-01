import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {SliceCaseReducers} from "@reduxjs/toolkit/src/createSlice";
import { UserSchema } from '../types/types'

const initialState: UserSchema = {
    id: null,
    username: ''
}

interface UserSlice extends UserSchema {}
interface UserSliceMapReducer extends SliceCaseReducers<UserSlice> {
    setUser: (state: UserSlice, action:PayloadAction<UserSchema>) => void
}
type NameUserSlice = 'user'


export const userSlice = createSlice<UserSlice, UserSliceMapReducer, NameUserSlice>({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.id = action.payload.id
            state.username = action.payload.username
        }
    }
})

export const userReducer = userSlice.reducer
export const {setUser} = userSlice.actions
