export enum Theme {
    DARK = 'dark',
    LIGHT = 'light'
}

export const LOCAL_STORAGE_THEME_KEY = 'theme'

export interface ContextThemeProviderProps {
    children: JSX.Element
}

export interface ContextThemeProps {
    theme: Theme, 
    setTheme?: (theme: Theme) => void
}

export type UseTheme = {
    (): { 
        toggleTheme: () => void,
        theme: Theme
    }
}
