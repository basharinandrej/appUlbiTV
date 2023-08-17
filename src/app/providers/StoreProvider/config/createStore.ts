import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import {counterReducer} from '@entities/counter'
import {userReducer} from '@entities/user'
import {createReducerManager} from '@app/providers/StoreProvider/config/storeManager'
import {$api} from '@shared/index'

import {StateSchema} from './type'

export function createReduxStore(initialStore: StateSchema) {
    const rootReducer: ReducersMapObject<StateSchema> = {
        counter: counterReducer,
        user: userReducer
    }

    const reducerManager = createReducerManager(rootReducer)

    const store = configureStore({
        reducer: reducerManager.reduce,
        preloadedState: initialStore,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api
                }
            }
        })
    })

    //@ts-ignore
    store.reducerManager = reducerManager

    return store
}

