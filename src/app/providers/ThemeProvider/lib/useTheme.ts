import {useContext} from 'react'
import {LOCAL_STORAGE_THEME_KEY, Theme, UseTheme} from '../types/contextTheme.types'
import {ContextTheme} from './contextTheme'

export const useTheme: UseTheme = () => {
    const {setTheme, theme} = useContext(ContextTheme)

    const toggleTheme = () => {
        let newTheme: Theme | null

        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT
                break
            case Theme.LIGHT:
                newTheme = Theme.ORANGE
                break
            case Theme.ORANGE:
                newTheme = Theme.DARK
                break
            default:
                newTheme = Theme.LIGHT
        }

        setTheme?.(newTheme)
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {toggleTheme, theme}
}
