import { useTranslation } from 'react-i18next'
import {Counter} from '@entities/counter/ui/counter'
import {Fragment} from 'react'

const PageHome = () => {
    const { t } = useTranslation()

    return (
        <Fragment>
            <h1>{t('Home')}</h1>
            <Counter />
        </Fragment>
    )
}

export default PageHome