import {FC} from "react";
import { Button, Input } from "@shared/index";
import {useTranslation} from "react-i18next";
import styles from './FormAuth.module.sass'

const FormAuth: FC = () => {
    const { t } = useTranslation();

    const onChangeUsernameHandler = () => {}
    const onChangePasswordHandler = () => {}

    return <form className={styles.form}>
        <Input className={styles.input} onChange={onChangeUsernameHandler}/>
        <Input className={styles.input} onChange={onChangePasswordHandler}/>
        <Button>{t('Войти')}</Button>
    </form>
}

export default FormAuth