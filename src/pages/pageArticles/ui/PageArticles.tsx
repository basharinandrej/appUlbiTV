import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {AppLink, useAppDispatch, useMount, setClassNames, useUnMount} from "@shared/index";
import {fetchArticles} from "../model/asyncActions/fetchArticles";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";
import {useSelector, useStore} from "react-redux";
import {articleReducer} from "@pages/pageArticles";
import {getListingArticles} from "../model/selectors/getListingArticles";

import styles from './pageArticles.module.sass'

const PageArticles: VFC<pageArticlesProps> = (props) => {
    const {className} = props
    const {t} = useTranslation('articles')
    const dispatch = useAppDispatch()
    const store = useStore() as StoreWithStoreManager

    const articleListing = useSelector(getListingArticles)

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
            {articleListing?.map((article) => (
                <div key={article.id}>
                    <h3>{article.title}</h3>
                    <h6>{article.subtitle}</h6>
                    <p>{article.createdAt}</p>
                    <p>{article.views}</p>
                    <p>{article.tags?.join(',')}</p>
                    <img src={article.img} alt="avatar article"/>
                </div>
            ))}
        </div>
    )
}

export default PageArticles

interface pageArticlesProps {
    className?: string
}