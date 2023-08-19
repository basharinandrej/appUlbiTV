import {VFC, MouseEvent} from "react"
import {useTranslation} from "react-i18next"
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useMount, setClassNames, useUnMount} from "@shared/index";
import {fetchArticles} from "../model/asyncActions/fetchArticles";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";
import {useSelector, useStore} from "react-redux";
import {articleReducer} from "../model/slice/articleSlice";
import {getListingArticles} from "../model/selectors/getListingArticles";
import {ArticleCard} from "../ui/components/ArticleCard";
import {ArticleCardSkeleton} from "../ui/components/ArticleCardSkeleton/ArticleCardSkeleton";
import {getIsLoadingArticles} from "../model/selectors/getIsLoadingArticles";

import styles from './PageArticles.module.sass'
import {RoutePaths} from "@app/providers/AppRoutes/config/appRoutesConfig";

const PageArticles: VFC<pageArticlesProps> = (props) => {
    const {className} = props
    const {t} = useTranslation('articles')
    const dispatch = useAppDispatch()
    const store = useStore() as StoreWithStoreManager
    const navigate = useNavigate();

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

    function onClickHandler(e: MouseEvent<HTMLDivElement>) {
        const elementArticleCard = (e.target as HTMLElement).closest("[data-id]")
        const idCard = elementArticleCard?.getAttribute('data-id')
        idCard && navigate(RoutePaths.articleDetails + idCard)
    }
    return (
        <div
            onClick={onClickHandler}
            className={setClassNames(styles.pageArticles, {}, [className])}
        >
            <h1 className={styles.title}>{t('Articles')}</h1>

            {/*добавить фичу листинг*/}
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