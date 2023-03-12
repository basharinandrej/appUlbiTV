import { useTranslation } from 'react-i18next'
import { AppLink } from '@shared/index'
import { ThemeSwitcher, LangSwitcher } from '@features/index'
import styles from './Navbar.module.sass'


export const Navbar = () => {
    const { t } = useTranslation()

    return (
        <div className={styles.navbar}>
            <AppLink to={'/'} className={styles.linkGap}>{t('Home')}</AppLink>
            <AppLink to={'/about'}>{t('About')}</AppLink>
            <ThemeSwitcher className={styles.gapThemeSwitcher} />
            <LangSwitcher />
        </div>
    )
}