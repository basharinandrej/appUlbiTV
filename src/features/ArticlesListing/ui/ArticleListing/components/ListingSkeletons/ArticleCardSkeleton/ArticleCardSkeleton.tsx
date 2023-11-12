import {VFC} from 'react'
import {setClassNames} from '@shared/index'

import styles from './ArticleCardSkeleton.module.sass'

export const ArticleCardSkeleton: VFC<ArticleCardSkeletonProps> = (props) => {
    const {className} = props
    return (
        <div className={setClassNames(styles.articleCardSkeleton, {}, [className])}>
            <div className={styles.loading} />
        </div>
    )
}

interface ArticleCardSkeletonProps {
    className?: string
}