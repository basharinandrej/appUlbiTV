
import {StateSchema} from "@app/providers/StoreProvider";

export const getEditable = (state: StateSchema) => state.profile?.isEditable