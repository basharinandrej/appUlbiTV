import {useCallback, VFC} from 'react'
import {useTranslation} from 'react-i18next'
import {useSelector} from "react-redux";
import {ArticleListing, fetchArticlesNextPart, getCurrentPage, getHasMore} from '@features/ArticlesListing'
import {ListingLayoutSwitcher} from "@features/index";
import {Page} from '@widgets/Page'
import {useAppDispatch} from "@shared/libs/hooks/appDispatch";

import styles from './PageArticles.module.sass'

const PageArticles: VFC<pageArticlesProps> = () => {
  const {t} = useTranslation('articles')
  const dispatch = useAppDispatch()

  const currentPage = useSelector(getCurrentPage)
  const hasMore = useSelector(getHasMore)

  const onScrollEndHandler = useCallback(() => {
    const nextPage = currentPage + 1

    hasMore && dispatch(fetchArticlesNextPart(nextPage))
  },[currentPage, hasMore, dispatch, fetchArticlesNextPart])

  return (
      <Page onScrollEnd={onScrollEndHandler}>
        <div className={styles.box}>
          <h1 className={styles.title}>{t('Articles')}</h1>
          <ListingLayoutSwitcher />
        </div>

        <ArticleListing />
      </Page>
  )
}

export default PageArticles

interface pageArticlesProps {
  className?: string
}