import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {setClassNames} from "@shared/libs/setClassNames";
import {AppLink, useAppDispatch, useMount} from "@shared/index";
import {fetchArticles} from "../model/asyncActions/fetchArticles";

import styles from './pageArticles.module.sass'

const PageArticles: VFC<pageArticlesProps> = (props) => {
    const {className} = props
    const {t} = useTranslation('articles')
    const dispatch = useAppDispatch()

    useMount(() => {
        dispatch(fetchArticles())
    })

    return (
        <div className={setClassNames(styles.pageArticles, {}, [className])}>
            <h1>{t('Articles')}</h1>
            <AppLink to={'/articles/1'}>1</AppLink>
            <AppLink to={'/articles/2'}>2</AppLink>
            <AppLink to={'/articles/3'}>3</AppLink>
        </div>
    )
}

export default PageArticles

interface pageArticlesProps {
    className?: string
}