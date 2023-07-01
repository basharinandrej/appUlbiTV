import {CounterSchema} from '@entities/counter'
import {UserSchema} from '@entities/user'
import {LoginSchema} from "@features/index";

export interface StateSchema {
    counter: CounterSchema
    user: UserSchema
    login: LoginSchema
}