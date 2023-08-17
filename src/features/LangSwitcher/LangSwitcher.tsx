import { useTranslation } from 'react-i18next'
import {Button, setClassNames} from '@shared/index'
import {FC} from 'react'

export const LangSwitcher: FC<LangSwitcherProps> = ({className}) => {
    const { t, i18n } = useTranslation()

    const toggleHandler = () => {
        const lang = i18n.language === 'ru' ? 'en' : 'ru'
        i18n.changeLanguage(lang)
    }

    return (
        <Button
            onClick={toggleHandler}
            className={setClassNames('', {}, [className])}
        >
            {t('Switch lang')}
        </Button>
    )
}

interface LangSwitcherProps {
    className?: string
}