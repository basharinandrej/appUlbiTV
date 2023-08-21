import {VFC} from "react"
import {setClassNames} from "@shared/index";

import styles from './ArticleBlockImageComponent.module.sass'

export const ArticleBlockImageComponent: VFC<ArticleBlockImageComponentProps> = (props) => {
    const {className, title, src} = props

    return (
        <div className={setClassNames(styles.articleBlockImageComponent, {}, [className])}>
            <img className={styles.image} src={src} alt={`Избражение ${title}`}/>
            <h5 className={styles.signature}>{title}</h5>
        </div>
    )
}

interface ArticleBlockImageComponentProps {
    className?: string
    src: string
    title: string
}