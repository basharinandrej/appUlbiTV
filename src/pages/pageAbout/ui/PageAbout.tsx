import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'
import styles from './pageAbout.module.sass'

const AboutHome = () => {
    const { t } = useTranslation('about')

    return (
        <Fragment>
            <h1 className={styles.title}>{t('About')}</h1>
            <p>{t('Параграф о нас')}</p>
        </Fragment>
    )
}

export default AboutHome