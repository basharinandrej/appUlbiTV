import {useTranslation} from 'react-i18next'
import {Fragment, useState} from 'react'
import {AppLink, Button, ButtonType} from '@shared/index'
import {LangSwitcher, ThemeSwitcher} from '@features/index'
import styles from './Navbar.module.sass'
import {ModalAuth} from "@features/AuthByUsername";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "@entities/user";
import {getIsAuth} from "@entities/user/model/selectors/getIsAuth";


export const Navbar = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch()
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
                <Button onClick={() => dispatch(logout())} buttonType={ButtonType.GHOST}>{t('Выход')}</Button>
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