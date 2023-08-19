import {VFC} from "react"
import {setClassNames} from "@shared/index";
import {ArticleCardSkeleton} from './ArticleCardSkeleton/ArticleCardSkeleton'

import styles from './ListingSkeletons.module.sass'


export const ListingSkeletons: VFC<ListingSkeletonsProps> = (props) => {
    const {className} = props
    const totalCards = Array.from({ length: 5 })

    return (
        <div className={setClassNames(styles.listingSkeletons, {}, [className])}>
            {totalCards.map(() => {
                return <ArticleCardSkeleton />
            })}
        </div>
    )
}

interface ListingSkeletonsProps {
    className?: string
}