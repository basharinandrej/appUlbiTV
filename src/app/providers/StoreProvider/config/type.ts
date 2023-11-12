import {CombinedState} from 'redux'
import { AxiosInstance } from 'axios'
import {CounterSchema} from '@entities/counter'
import {UserSchema} from '@entities/user'
import {LoginSchema} from '@features/index'
import {EnhancedStore} from '@reduxjs/toolkit/src/configureStore'
import {AnyAction, Reducer} from '@reduxjs/toolkit'
import {createReduxStore} from '@app/providers/StoreProvider/config/createStore'
import {ProfileSchema} from '@pages/index'
import {ArticlesSchema} from '@pages/pageArticles'
import {ArticleDetailsSchema} from '@entities/article'
import {NewCommentSchema} from '@features/AddNewComment'

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    profile?: ProfileSchema
    login?: LoginSchema
    articles?: ArticlesSchema
    articleDetails?: ArticleDetailsSchema
    newComment?: NewCommentSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>,
    add:(key: StateSchemaKey, reducer: Reducer) => void,
    remove:(key: StateSchemaKey) => void
}

export interface StoreWithStoreManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch']

export interface thunkMiddleware {
    api: AxiosInstance
}

export interface ThunkApiConfig<T> {
    extra: thunkMiddleware
    state: StateSchema
    rejectValue: {msg: T}
}

