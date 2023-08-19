import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {AppLink, useAppDispatch, useMount, setClassNames, useUnMount} from "@shared/index";
import {fetchArticles} from "../model/asyncActions/fetchArticles";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";
import {useSelector, useStore} from "react-redux";
import {articleReducer} from "../model/slice/articleSlice";
import {getListingArticles} from "../model/selectors/getListingArticles";
import {ArticleCard} from "../ui/components/ArticleCard";
import {ArticleCardSkeleton} from "../ui/components/ArticleCardSkeleton/ArticleCardSkeleton";
import {getIsLoadingArticles} from "../model/selectors/getIsLoadingArticles";

import styles from './PageArticles.module.sass'

const PageArticles: VFC<pageArticlesProps> = (props) => {
    const {className} = props
    const {t} = useTranslation('articles')
    const dispatch = useAppDispatch()
    const store = useStore() as StoreWithStoreManager

    const articleListing = useSelector(getListingArticles)
    const isLoadingArticles = useSelector(getIsLoadingArticles)

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

            {isLoadingArticles
                ? <ArticleCardSkeleton />
                : articleListing?.map((article) => (
                    <ArticleCard key={article.id} articleWithoutBlock={article} />
                ))
            }
        </div>
    )
}

export default PageArticles

interface pageArticlesProps {
    className?: string
}