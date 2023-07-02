import {useTranslation} from 'react-i18next'
import {Fragment, useState} from 'react'
import {AppLink, Button, ButtonType} from '@shared/index'
import {LangSwitcher, ThemeSwitcher} from '@features/index'
import styles from './Navbar.module.sass'
import {ModalAuth} from "@features/AuthByUsername";
import {getIsAuth} from "@entities/user";
import {useSelector} from "react-redux";


export const Navbar = () => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)

    const isAuth = useSelector(getIsAuth)

    const commonPartNavbar = (
        <Fragment>
            <AppLink to={'/'} className={styles.linkGap}>{t('Home')}</AppLink>
            <AppLink to={'/about'}>{t('About')}</AppLink>
            <ThemeSwitcher className={styles.gapThemeSwitcher} />
            <LangSwitcher />
        </Fragment>
    )

    if(isAuth) {
        return (
            <div className={styles.navbar}>
                {commonPartNavbar}
                <Button buttonType={ButtonType.SECONDARY}>{t('Выход')}</Button>
            </div>
        )
    }

    return (
        <div className={styles.navbar}>
            {commonPartNavbar}
            <Button onClick={()=> setIsOpen(true)} buttonType={ButtonType.GHOST}>{t('Вход')}</Button>

            <ModalAuth
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
            />
        </div>
    )
}