import { FC, useState, useMemo} from 'react' 
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    ContextThemeProviderProps,
} from '../types/contextTheme.types'
import { ContextTheme } from '../lib/contextTheme'

const defaultThemeValue = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme


export const ContextThemeProvider: FC<ContextThemeProviderProps> = ({children}) => {
    const [theme, setTheme] = useState<Theme>(defaultThemeValue)

    const defaultValue = useMemo(() => {
        return {theme, setTheme}
    }, [theme])

    return (
        <ContextTheme.Provider value={defaultValue}>
            {children}
        </ContextTheme.Provider>
    )
}

