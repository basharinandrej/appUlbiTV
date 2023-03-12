import { createContext} from 'react' 
import {
    Theme,
    ContextThemeProps
} from '../types/contextTheme.types'

export const ContextTheme = createContext<ContextThemeProps>({theme: Theme.DARK})
