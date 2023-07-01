import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import {counterReducer} from '@entities/counter'
import {userReducer} from "@entities/user";
import {loginReducer} from "@features/index";

import {StateSchema} from './type'

export function createReduxStore() {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer,
        login: loginReducer
    }

    return configureStore({
        reducer: rootReducer,
    })
}

