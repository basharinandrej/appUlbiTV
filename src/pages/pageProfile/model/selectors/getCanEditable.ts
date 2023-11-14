
import {StateSchema} from '@app/providers/StoreProvider'

export const getCanEditable = (state: StateSchema) => state.profile?.canEditable