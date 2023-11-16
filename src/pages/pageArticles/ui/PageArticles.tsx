import {VFC} from 'react'
import {useTranslation} from 'react-i18next'
import {setClassNames} from '@shared/index'
import {ArticleListing} from '@features/ArticlesListing'

import styles from './PageArticles.module.sass'

const PageArticles: VFC<pageArticlesProps> = (props) => {
  const {className} = props
  const {t} = useTranslation('articles')

  return (
      <div className={setClassNames(styles.pageArticles, {}, [className])}>
        <h1 className={styles.title}>{t('Articles')}</h1>
        <button>вид статей</button>
        <ArticleListing />
      </div>
  )
}

export default PageArticles

interface pageArticlesProps {
  className?: string
}