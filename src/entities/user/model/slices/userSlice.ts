import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/types'

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
        }
    }
})

export const userReducer = userSlice.reducer
export const { setUser } = userSlice.actions
