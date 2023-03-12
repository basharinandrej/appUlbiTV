import {FC} from 'react'
import {Page404Props} from '../types/types'
import {useTranslation} from "react-i18next";

const Page404: FC<Page404Props> = ({error}) => {
    const { t } = useTranslation()

    return (
        <>
            <h1>{t('Страница не найдена')}</h1>
            {error?.message && <p>{error?.message}</p>}
        </>
    )
}

export default Page404