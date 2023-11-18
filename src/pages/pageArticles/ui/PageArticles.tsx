import {VFC} from 'react'
import {useTranslation} from 'react-i18next'
import {ArticleListing} from '@features/ArticlesListing'
import {ListingLayoutSwitcher} from "@features/index";
import {Page} from '@widgets/Page'

import styles from './PageArticles.module.sass'

const PageArticles: VFC<pageArticlesProps> = () => {
  const {t} = useTranslation('articles')

  return (
      <Page>
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