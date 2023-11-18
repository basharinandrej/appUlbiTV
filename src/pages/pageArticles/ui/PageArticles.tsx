import {VFC, Fragment} from 'react'
import {useTranslation} from 'react-i18next'
import {ArticleListing} from '@features/ArticlesListing'
import {ListingLayoutSwitcher} from "@features/index";

import styles from './PageArticles.module.sass'

const PageArticles: VFC<pageArticlesProps> = () => {
  const {t} = useTranslation('articles')

  return (
      <Fragment>
        <div className={styles.box}>
          <h1 className={styles.title}>{t('Articles')}</h1>
          <ListingLayoutSwitcher />
        </div>

        <ArticleListing />
      </Fragment>
  )
}

export default PageArticles

interface pageArticlesProps {
  className?: string
}