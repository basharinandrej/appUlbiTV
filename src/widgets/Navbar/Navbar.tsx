import {useTranslation} from 'react-i18next'
import {Fragment, useState} from 'react'
import {AppLink, Button, ButtonType, Container} from '@shared/index'
import {LangSwitcher, ThemeSwitcher} from '@features/index'
import {ModalAuth} from "@features/AuthByUsername";
import {getIsAuth, logout} from "@entities/user";
import {useDispatch, useSelector} from "react-redux";

import styles from './Navbar.module.sass'

export const Navbar = () => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const isAuth = useSelector(getIsAuth)

    const handleLogout = () => {
        dispatch(logout())
    }

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
                <Container>
                    {commonPartNavbar}
                    <Button onClick={handleLogout} buttonType={ButtonType.SECONDARY}>{t('Выход')}</Button>
                </Container>
            </div>
        )
    }

    return (
        <div className={styles.navbar}>
            <Container>
                {commonPartNavbar}
                <Button onClick={()=> setIsOpen(true)} buttonType={ButtonType.GHOST}>{t('Вход')}</Button>

                <ModalAuth
                    isOpen={isOpen}
                    onClose={() => setIsOpen(false)}
                />
            </Container>
        </div>
    )
}