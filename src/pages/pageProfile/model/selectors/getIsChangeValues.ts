import {StateSchema} from "@app/providers/StoreProvider";
import {isEqual} from 'lodash'

export const getIsChangeValues = (state: StateSchema) => {
    const form = state?.profile?.form
    const profile = state?.profile?.data

    if(!form || !profile) return

    return !isEqual({...profile, ...form}, profile)
}