import {FC} from 'react'
import {Theme, useTheme} from '@app/providers/ThemeProvider'
import { Button, ButtonType } from '@shared/index'
import {useTranslation} from 'react-i18next'

export const ThemeSwitcher: FC<ThemeSwitcherProps> = props => {
    const {className} = props
    let {theme, toggleTheme} = useTheme()
    const {t} = useTranslation()

    switch (theme) {
        case Theme.DARK:
            theme = Theme.LIGHT
            break;
        case Theme.LIGHT:
            theme = Theme.ORANGE
            break;
        case Theme.ORANGE:
            theme = Theme.DARK
            break;
    }

    return(
        <Button
            buttonType={theme === Theme.DARK ? ButtonType.PRIMARY : ButtonType.SECONDARY}
            className={className}
            onClick={toggleTheme}
        >
            {`${t('Theme')} ${t(theme)}`}
        </Button>
    )
}

interface ThemeSwitcherProps {
    className?: string
}