import {useTranslation} from 'react-i18next'
import {useState} from 'react'
import {AppLink, Button, ButtonType} from '@shared/index'
import {LangSwitcher, ThemeSwitcher} from '@features/index'
import styles from './Navbar.module.sass'
import {ModalAuth} from "@features/AuthByUsername";


export const Navbar = () => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className={styles.navbar}>
            <AppLink to={'/'} className={styles.linkGap}>{t('Home')}</AppLink>
            <AppLink to={'/about'}>{t('About')}</AppLink>
            <ThemeSwitcher className={styles.gapThemeSwitcher} />
            <LangSwitcher />
            <Button onClick={()=> setIsOpen(true)} buttonType={ButtonType.GHOST}>Вход</Button>

            <ModalAuth
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    )
}