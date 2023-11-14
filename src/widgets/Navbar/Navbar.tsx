import {useTranslation} from 'react-i18next'
import {Fragment, useState} from 'react'
import {Avatar, Button, ButtonType, Container, ContainerSize, SizeAvatar} from '@shared/index'
import {LangSwitcher, ThemeSwitcher} from '@features/index'
import {ModalAuth} from '@features/AuthByUsername'
import {getIsAuth, getUserData, logout} from '@entities/user'
import {useDispatch, useSelector} from 'react-redux'

import styles from './Navbar.module.sass'

export const Navbar = () => {
    const { t } = useTranslation()
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()

    const isAuth = useSelector(getIsAuth)
    const userData = useSelector(getUserData)

    const handleLogout = () => {
        dispatch(logout())
    }

    const commonPartNavbar = (
        <Fragment>
            <ThemeSwitcher className={styles.gapThemeSwitcher} />
            <LangSwitcher className={styles.gapLangSwitcher} />
        </Fragment>
    )

    if(isAuth) {
        return (
            <div className={styles.navbar}>
                <Container>
                    <div className={styles.info}>
                      <Avatar
                          avatarSrc={userData.avatar}
                          size={SizeAvatar.SMALL}
                          className={styles.avatar}
                      />
                      <strong className={styles.name}>{userData.username}</strong>
                    </div>

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