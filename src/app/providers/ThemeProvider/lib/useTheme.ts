import { useContext } from 'react' 
import {
    LOCAL_STORAGE_THEME_KEY,
    Theme,
    UseTheme
} from '../types/contextTheme.types'
import { ContextTheme } from './contextTheme'

export const useTheme: UseTheme = () => {
    const {setTheme, theme} = useContext(ContextTheme)

    const toggleTheme = () => {
        const newState = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme?.(newState)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newState)
    }

    return {toggleTheme, theme}
}
