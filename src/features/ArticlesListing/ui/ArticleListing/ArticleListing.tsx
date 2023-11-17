import {MouseEvent, VFC} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {setClassNames, useAppDispatch, useDynamicLoaderReducers, useMount} from '@shared/index'
import {getListingArticles} from '../../model/selectors/getListingArticles'
import {getIsLoadingArticles} from '../../model/selectors/getIsLoadingArticles'
import {ListingSkeletons} from './components/ListingSkeletons/ListingSkeletons'
import {articleReducer} from '../../model/slice/articlesSlice'
import {fetchArticles} from '../../model/asyncActions/fetchArticles'
import {RoutePaths} from '@app/index'
import {ArticleCard, ArticleCardType} from '@entities/article'
import {getViewListing} from "@features/ListingLayoutSwitcher";
import {ViewListing} from '../../../ListingLayoutSwitcher/model/enums/enums'

import styles from './articleListing.module.sass'

export const ArticleListing: VFC<ArticleListingProps> = (props) => {
    const {className} = props
    const navigate = useNavigate()

    const dispatch = useAppDispatch()
    useDynamicLoaderReducers({'articles': articleReducer})

    const articleListing = useSelector(getListingArticles)
    const isLoadingArticles = useSelector(getIsLoadingArticles)
    const viewListing = useSelector(getViewListing)

    const typeCard = viewListing === ViewListing.GRID ? ArticleCardType.GRID : ArticleCardType.ROW

    useMount(() => {
        dispatch(fetchArticles())
    })

    function onClickHandler(e: MouseEvent<HTMLDivElement>) {
        const elementArticleCard = (e.target as HTMLElement).closest('[data-id]')
        const idCard = elementArticleCard?.getAttribute('data-id')
        idCard && navigate(RoutePaths.articleDetails + idCard)
    }

    const mods = {
        [styles.row]: true
    }

    return (
        <div
            onClick={onClickHandler}
            className={setClassNames(styles.articleListing, mods, [className])}
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
        </div>
    )
}

interface ArticleListingProps {
    className?: string
}