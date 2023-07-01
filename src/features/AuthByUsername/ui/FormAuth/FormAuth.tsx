import {FC} from "react";
import { Button, Input } from "@shared/index";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import { setLogin, setPassword } from "../../model/slice/loginSlice";
import {getUsernameValue} from "../../model/selectors/getUsernameValue";
import {getPasswordValue} from "../../model/selectors/getPasswordValue";

import styles from './FormAuth.module.sass'

const FormAuth: FC = () => {
    const { t } = useTranslation('formAuth');

    const dispatch = useDispatch()
    const usernameValue = useSelector(getUsernameValue)
    const passwordValue = useSelector(getPasswordValue)

    const onChangeUsernameHandler = (value: string) => {
        dispatch(setLogin(value))
    }
    const onChangePasswordHandler = (value: string) => {
        dispatch(setPassword(value))
    }

    return <form className={styles.form}>
        <Input
            className={styles.input}
            externalValue={usernameValue}
            onChange={onChangeUsernameHandler}
            placeholder={t('Имя пользователя')}
        />
        <Input
            className={styles.input}
            onChange={onChangePasswordHandler}
            externalValue={passwordValue}
            placeholder={t('Пароль')}
            type={'password'}
        />
        <Button>{t('Войти')}</Button>
    </form>
}

export default FormAuth