import {MouseEvent, useCallback, VFC} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {setClassNames, useAppDispatch, useDynamicLoaderReducers, useMount} from '@shared/index'
import {RoutePaths} from '@app/index'
import {ArticleCard, ArticleCardType} from '@entities/article'
import {getViewListing} from "@features/ListingLayoutSwitcher";
import {MainContentContainer} from '@widgets/MainContentContainer'
import {getListingArticles} from '../../model/selectors/getListingArticles'
import {getIsLoadingArticles} from '../../model/selectors/getIsLoadingArticles'
import {ListingSkeletons} from './components/ListingSkeletons/ListingSkeletons'
import {articleReducer} from '../../model/slice/articlesSlice'
import {getCurrentPage, getHasMore} from "../../model/selectors/selectors"
import {fetchArticlesNextPart} from "../../model/asyncActions/fetchArticlesNextPart"
import {fetchArticles} from '../../model/asyncActions/fetchArticles'
import {ViewListing} from '../../../ListingLayoutSwitcher/model/enums/enums'

import styles from './articleListing.module.sass'

const reducers = {
    'articles': articleReducer
}

export const ArticleListing: VFC<ArticleListingProps> = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    useDynamicLoaderReducers(reducers)

    const articleListing = useSelector(getListingArticles)
    const isLoadingArticles = useSelector(getIsLoadingArticles)
    const viewListing = useSelector(getViewListing)
    const currentPage = useSelector(getCurrentPage)
    const hasMore = useSelector(getHasMore)

    const typeCard = viewListing === ViewListing.GRID ? ArticleCardType.GRID : ArticleCardType.ROW

    useMount(() => {
        dispatch(fetchArticles())
    })

    const onScrollEndHandler = useCallback(() => {
        const nextPage = currentPage + 1

        hasMore && dispatch(fetchArticlesNextPart(nextPage))
    },[currentPage, hasMore, dispatch, fetchArticlesNextPart])

    function onClickHandler(e: MouseEvent<HTMLDivElement>) {
        const elementArticleCard = (e.target as HTMLElement).closest('[data-id]')
        const idCard = elementArticleCard?.getAttribute('data-id')
        idCard && navigate(RoutePaths.articleDetails + idCard)
    }

    const mods = {
        [styles.row]: true
    }

    return (
        <MainContentContainer
            onScrollEnd={onScrollEndHandler}
            onClick={onClickHandler}
            className={setClassNames(styles.articleListing, mods)}
        >
            {isLoadingArticles
                ? <ListingSkeletons />
                : articleListing?.map((article) => (
                    <ArticleCard
                        type={typeCard}
                        key={article.id}
                        article={article}
                    />
                ))
            }
        </MainContentContainer>
    )
}

interface ArticleListingProps {
    className?: string
}