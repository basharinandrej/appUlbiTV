import { useTranslation } from 'react-i18next'
import { Button } from '@shared/index'

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation()

    const toggleHandler = () => {
        const lang = i18n.language === 'ru' ? 'en' : 'ru'
        i18n.changeLanguage(lang)
    }

    return (
        <Button
            onClick={toggleHandler}
        >
            {t('Switch lang')}
        </Button>
    )
}