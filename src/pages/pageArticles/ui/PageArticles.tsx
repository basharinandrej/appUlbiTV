import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {AppLink, useAppDispatch, useMount, setClassNames, useUnMount} from "@shared/index";
import {fetchArticles} from "../model/asyncActions/fetchArticles";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";
import {useStore} from "react-redux";
import {articleReducer} from "@pages/pageArticles";

import styles from './pageArticles.module.sass'

const PageArticles: VFC<pageArticlesProps> = (props) => {
    const {className} = props
    const {t} = useTranslation('articles')
    const dispatch = useAppDispatch()
    const store = useStore() as StoreWithStoreManager

    useMount(() => {
        dispatch({type: 'INIT_Articles'})
        store.reducerManager.add('articles', articleReducer)
        dispatch(fetchArticles())
    })

    useUnMount(() => {
        dispatch({type: 'UNINIT_Articles'})
        store.reducerManager.remove('articles')
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