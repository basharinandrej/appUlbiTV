import {Provider} from 'react-redux'
import {FC, ReactNode} from 'react'
import {createReduxStore} from '../config/createStore'
import {StateSchema} from '@app/providers/StoreProvider'
import {DeepPartial} from '@reduxjs/toolkit'


export const StoreProvider: FC<StoreProviderProps> = ({children, initialState}) => {

    const store = createReduxStore(initialState as StateSchema)
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

interface StoreProviderProps {
    children: ReactNode
    initialState?: DeepPartial<StateSchema>
}