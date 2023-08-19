import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {AppLink, useAppDispatch, useMount, setClassNames, useUnMount} from "@shared/index";
import {fetchArticles} from "../model/asyncActions/fetchArticles";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";
import {useSelector, useStore} from "react-redux";
import {articleReducer} from "@pages/pageArticles";
import {getListingArticles} from "../model/selectors/getListingArticles";
import {ArticleCard} from "../ui/components/ArticleCard";

import styles from './PageArticles.module.sass'
import {ArticleCardSkeleton} from "@pages/pageArticles/ui/components/ArticleCardSkeleton/ArticleCardSkeleton";

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
            <h1 className={styles.title}>{t('Articles')}</h1>

            <ArticleCardSkeleton />

            {articleListing?.map((article) => (
                <ArticleCard key={article.id} articleWithoutBlock={article} />
            ))}
        </div>
    )
}

export default PageArticles

interface pageArticlesProps {
    className?: string
}