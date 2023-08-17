import {FC, MouseEventHandler, useCallback} from 'react'
import {Button, Input, useAppDispatch, RequestStatus, useMount, useUnMount} from '@shared/index'
import {useTranslation} from 'react-i18next'
import {useSelector, useStore} from 'react-redux'
import {StoreWithStoreManager} from '@app/index'
import {setUsername, setPassword, loginReducer} from '../../../model/slice/loginSlice'
import {getUsername} from '../../../model/selectors/getUsername'
import {getPassword} from '../../../model/selectors/getPassword'
import {loginByUsername} from '../../../model/asyncActions/loginByUsername'
import {getError} from '../../../model/selectors/getError'

import styles from './FormAuth.module.sass'

const FormAuth: FC<FormAuthProps> = ({
  onSuccess
}) => {
    const { t } = useTranslation('formAuth')

    const dispatch = useAppDispatch()
    const username = useSelector(getUsername)
    const password = useSelector(getPassword)
    const error = useSelector(getError)

    const store = useStore() as StoreWithStoreManager

    useMount(() => {
        dispatch({type: 'INIT_LoginReducer'})
        store.reducerManager.add('login', loginReducer)
    })
    useUnMount(() => {
        //@todo непроисходит размаунта
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

    const onClickEnteredHandler: MouseEventHandler<HTMLButtonElement> = useCallback( async(e) => {
        e.preventDefault()
        const result = await dispatch(loginByUsername({username, password}))

        if(result.meta.requestStatus === RequestStatus.FULFILLED) {
            onSuccess()
        }

    }, [onSuccess, username, password, dispatch, loginByUsername])

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

export interface FormAuthProps {
    onSuccess: () => void
}