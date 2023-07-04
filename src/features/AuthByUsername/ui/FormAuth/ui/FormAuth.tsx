import {FC, MouseEventHandler, useCallback} from "react";
import {Button, Input, useMount, useUnMount} from "@shared/index";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector, useStore} from "react-redux";
import {setUsername, setPassword, loginReducer} from "../../../model/slice/loginSlice";
import {getUsername} from "../../../model/selectors/getUsername";
import {getPassword} from "../../../model/selectors/getPassword";
import {loginByUsername} from "../../../model/asyncActions/loginByUsername";
import {getError} from "../../../model/selectors/getError";
import {StoreWithStoreManager} from "@app/providers/StoreProvider/config/type";

import styles from './FormAuth.module.sass'


const FormAuth: FC = () => {
    const { t } = useTranslation('formAuth');

    const dispatch = useDispatch()
    const username = useSelector(getUsername)
    const password = useSelector(getPassword)
    const error = useSelector(getError)

    const store = useStore() as StoreWithStoreManager

    useMount(() => {
        dispatch({type: 'INIT_LoginReducer'})
        store.reducerManager.add('login', loginReducer)
    })
    useUnMount(() => {
        dispatch({type: 'UNINIT_LoginReducer'})
        store.reducerManager.remove('login')
    })

    const isDisabled = !password && !username

    const onChangeUsernameHandler = useCallback((value: string) => {
        dispatch(setUsername(value))
    }, [dispatch])

    const onChangePasswordHandler = useCallback((value: string) => {
        dispatch(setPassword(value))
    }, [dispatch])

    const onClickEnteredHandler: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
        e.preventDefault()
        dispatch(loginByUsername({username, password}))
    }, [username, password, dispatch, loginByUsername])

    return <form className={styles.form}>
        <Input
            className={styles.input}
            externalValue={username}
            onChange={onChangeUsernameHandler}
            placeholder={t('Имя пользователя')}
        />
        <Input
            className={styles.input}
            onChange={onChangePasswordHandler}
            externalValue={password}
            placeholder={t('Пароль')}
            type={'password'}
        />
        <Button
            disabled={isDisabled}
            onClick={onClickEnteredHandler}
        >{t('Войти')}</Button>

        {error && <p className={styles.error}>{error}</p>}
    </form>
}

export default FormAuth