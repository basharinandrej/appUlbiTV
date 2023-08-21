import {MouseEvent, VFC} from "react"
import {useSelector, useStore} from "react-redux";
import {useNavigate} from "react-router-dom";
import {setClassNames, useAppDispatch, useMount, useUnMount} from "@shared/index";
import {getListingArticles} from "../../model/selectors/getListingArticles"
import {getIsLoadingArticles} from "../../model/selectors/getIsLoadingArticles"
import {
    ListingSkeletons
} from "./components/ListingSkeletons/ListingSkeletons";
import { ArticleCard } from "./components/ArticleCard/ArticleCard";
import {articleReducer} from "../../model/slice/articleSlice";
import {fetchArticles} from "../../model/asyncActions/fetchArticles";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";
import {RoutePaths} from "@app/providers/AppRoutes/config/appRoutesConfig";

import styles from './articleListing.module.sass'

export const ArticleListing: VFC<ArticleListingProps> = (props) => {
    const {className} = props
    const navigate = useNavigate();

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

    function onClickHandler(e: MouseEvent<HTMLDivElement>) {
        const elementArticleCard = (e.target as HTMLElement).closest("[data-id]")
        const idCard = elementArticleCard?.getAttribute('data-id')
        idCard && navigate(RoutePaths.articleDetails + idCard)
    }

    return (
        <div
            onClick={onClickHandler}
            className={setClassNames(styles.articleListing, {}, [className])}
        >
            {isLoadingArticles
                ? <ListingSkeletons />
                : articleListing?.map((article) => (
                    <ArticleCard className={styles.articleCard} key={article.id} articleWithoutBlock={article} />
                ))
            }
        </div>
    )
}

interface ArticleListingProps {
    className?: string
}