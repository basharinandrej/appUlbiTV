import {VFC, memo, Fragment} from 'react'
import {useTranslation} from 'react-i18next'
import {setClassNames, Tag} from '@shared/index'
import {Article} from  '@entities/article'

import styles from './articleCard.module.sass'

export const ArticleCard: VFC<ArticleCardProps> = memo((props) => {
  const {article, type} = props
  const {t} = useTranslation('articles')

  const avatar = <img className={styles.avatar} src={article.img} alt="avatar article"/>
  const titles = (
      <Fragment>
        <h3 className={styles.title}>{article.title}</h3>
        <h6 className={styles.subtitle}>{article.subtitle}</h6>
      </Fragment>
  )

  const tags = (
      <div className={styles.tags}>
        {t('Tags')}:&nbsp;{article.tags?.map((tag, idx) => {
          return <Tag key={idx} text={tag} />
        })}
      </div>
  )

  const createdAt = (
      <p className={styles.createdAt}>
        {t('CreatedAt')}:&nbsp;<br/>{article.createdAt}
      </p>
  )

  if(type === ArticleCardType.ROW) {
    const blockText = article.blocks[0] as any // todo перенести в сущности
    const mods = {
      [styles.row]: true
    }

    return <div data-id={article.id} className={setClassNames(styles.articleCard, mods, [])}>
      {titles}
      {avatar}

      <div className={styles.blockParagraph}>
        {blockText.paragraphs.map((paragraph: string, idx: string) => {
          return <p key={idx} className={styles.paragraph}>{paragraph}</p>
        })}
      </div>


      {tags}
      {createdAt}
    </div>
  }

  return (
    <div data-id={article.id} className={setClassNames(styles.articleCard, {}, [])}>
      {avatar}
      {titles}
      {tags}
      {createdAt}
    </div>
    )
})

interface ArticleCardProps {
  className?: string
  article: Article
  type: ArticleCardType
}

export enum ArticleCardType {
  GRID = 'grid',
  ROW = 'row'
}