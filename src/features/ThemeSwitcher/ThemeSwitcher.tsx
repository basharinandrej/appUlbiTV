import {FC} from 'react'
import {Theme, useTheme} from '@app/providers/ThemeProvider'
import { Button, ButtonType } from '@shared/index'
import {useTranslation} from "react-i18next";

export const ThemeSwitcher: FC<ThemeSwitcherProps> = props => {
    const {className} = props
    const {theme, toggleTheme} = useTheme()
    const {t} = useTranslation()

    return(
        <Button
            buttonType={theme === Theme.DARK ? ButtonType.PRIMARY : ButtonType.SECONDARY}
            className={className}
            onClick={toggleTheme}
        >
            {t('Toggle theme')}
        </Button>
    )
}

interface ThemeSwitcherProps {
    className?: string
}