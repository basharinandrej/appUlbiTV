import { configureStore } from '@reduxjs/toolkit'
import {counterReducer} from '@entities/index'
import {StateSchema} from "./type";

export function createReduxStore() {

    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer
        },
    })
}

