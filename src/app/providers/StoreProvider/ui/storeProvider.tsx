import {Provider} from 'react-redux'
import {FC, ReactNode} from 'react'
import {createReduxStore} from '../config/createStore'


export const StoreProvider: FC<StoreProviderProps> = ({children}) => {

    const store = createReduxStore()
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

interface StoreProviderProps {
    children: ReactNode
}