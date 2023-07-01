import {StateSchema} from "@app/providers/StoreProvider";


export const getUsernameValue = (state: StateSchema) => {
    return state.login.username
}