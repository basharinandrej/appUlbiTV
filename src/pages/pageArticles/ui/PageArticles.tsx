import {VFC} from 'react'
import {useTranslation} from 'react-i18next'
import {setClassNames} from '@shared/index'
import {ArticleListing} from '@features/ArticlesListing'
import {ListingLayoutSwitcher} from "@features/index";

import styles from './PageArticles.module.sass'

const PageArticles: VFC<pageArticlesProps> = (props) => {
  const {className} = props
  const {t} = useTranslation('articles')

  return (
      <div className={setClassNames(styles.pageArticles, {}, [className])}>
        <div className={styles.box}>
          <h1 className={styles.title}>{t('Articles')}</h1>
          <ListingLayoutSwitcher />
        </div>

        <ArticleListing />
      </div>
  )
}

export default PageArticles

interface pageArticlesProps {
  className?: string
}