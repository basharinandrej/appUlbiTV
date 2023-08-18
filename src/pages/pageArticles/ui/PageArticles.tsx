import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {setClassNames} from "@shared/libs/setClassNames";

import styles from './pageArticles.module.sass'

const PageArticles: VFC<pageArticlesProps> = (props) => {
    const {className} = props
    const {t} = useTranslation('articles')

    return (
        <div className={setClassNames(styles.pageArticles, {}, [className])}>
            <h1>{t('Articles')}</h1>
        </div>
    )
}

export default PageArticles

interface pageArticlesProps {
    className?: string
}