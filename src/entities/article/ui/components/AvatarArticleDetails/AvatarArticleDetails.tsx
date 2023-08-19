import {VFC} from "react"
import {setClassNames} from "@shared/index";

import styles from './AvatarArticleDetails.module.sass'

export const AvatarArticleDetails: VFC<AvatarArticleDetailsProps> = (props) => {
    const {className, src} = props

    return (
        <div className={setClassNames(styles.avatarArticleDetails, {}, [className])}>

            <img
                src={src}
                className={styles.avatarImg}
                alt="avatar article"
            />

        </div>
    )
}

interface AvatarArticleDetailsProps {
    className?: string
    src: string
}