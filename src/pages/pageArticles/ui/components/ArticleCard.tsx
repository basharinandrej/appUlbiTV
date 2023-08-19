import {VFC, memo} from "react"
import {useTranslation} from "react-i18next"
import {setClassNames} from "@shared/index";
import {ArticleWithoutBlocks} from "../../model/types/article";

import styles from './articleCard.module.sass'

export const ArticleCard: VFC<articleCardProps> = memo((props) => {
    const {className, articleWithoutBlock} = props
    const {t} = useTranslation('articles')
    return (
        <div className={setClassNames(styles.articleCard, {}, [className])}>
            <img
                className={styles.avatar}
                src={articleWithoutBlock.img}
                alt="avatar article"
            />

            <h3 className={styles.title}>{articleWithoutBlock.title}</h3>
            <h6 className={styles.subtitle}>{articleWithoutBlock.subtitle}</h6>

            <div className={styles.box}>
                <p className={styles.views}>
                    {t("Views")}:&nbsp;{articleWithoutBlock.views}
                </p>
                <p className={styles.tags}>
                    {t("Tags")}:&nbsp;{articleWithoutBlock.tags?.join(',')}
                </p>
            </div>

            <p className={styles.createdAt}>
                {t("CreatedAt")}:&nbsp;<br/>{articleWithoutBlock.createdAt}
            </p>
        </div>
    )
})

interface articleCardProps {
    className?: string
    articleWithoutBlock: ArticleWithoutBlocks
}