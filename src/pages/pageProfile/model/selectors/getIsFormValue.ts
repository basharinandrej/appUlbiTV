import {StateSchema} from "@app/providers/StoreProvider";

export const getIsFormValue = (state: StateSchema) => {
    const form = state?.profile?.form

    if(!form) return

    return !!Object.values(form).filter(Boolean).length
}