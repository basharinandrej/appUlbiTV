import {StateSchema} from "@app/providers/StoreProvider";


export const getUsername = (state: StateSchema) => {
    return state.login.username
}