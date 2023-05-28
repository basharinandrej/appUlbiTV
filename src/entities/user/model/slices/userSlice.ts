import { createSlice } from '@reduxjs/toolkit'
import { UserSchema } from '../types/types'

const initialState: UserSchema = {
    id: 1,
    name: 'Andrej'
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {}
})

export const userReducer = userSlice.reducer
