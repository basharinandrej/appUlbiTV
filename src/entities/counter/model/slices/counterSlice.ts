import {createSlice} from '@reduxjs/toolkit'
import {CounterSchema} from '../types/types'

const initialState: CounterSchema = {
    value: 0
}
export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state: CounterSchema) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        }
    },
})

export const counterReducer = counterSlice.reducer
export const {increment, decrement} = counterSlice.actions

