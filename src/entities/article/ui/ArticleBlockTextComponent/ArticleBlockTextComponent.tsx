import {VFC} from "react"
import {setClassNames} from "@shared/index";

import styles from './ArticleBlockTextComponent.module.sass'

export const ArticleBlockTextComponent: VFC<ArticleBlockTextComponentProps> = (props) => {
    const {className, title, paragraphs} = props
    return (
        <div className={setClassNames(styles.articleBlockTextComponent, {}, [className])}>

            {title && <h2 className={styles.title}>{title}</h2>}
            {paragraphs.map((paragraph, idx) => {
                return <p key={idx} className={styles.paragraph}>{paragraph}</p>
            })}
        </div>
    )
}

interface ArticleBlockTextComponentProps {
    className?: string
    title?: string
    paragraphs: Array<string>
}