import { useTranslation } from 'react-i18next'

const PageHome = () => {
    const { t } = useTranslation()

    return (
        <h1>{t('Home')}</h1>
    )
}

export default PageHome