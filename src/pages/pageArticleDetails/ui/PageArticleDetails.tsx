import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {setClassNames} from "@shared/libs/setClassNames";

import styles from './PageArticleDetails.module.sass'

const PageArticleDetails: VFC<pageArticlesProps> = (props) => {
    const {className} = props
    const {t} = useTranslation('articles')

    return (
        <div className={setClassNames(styles.pageArticles, {}, [className])}>
            <h1>{t('Articles')} PageArticleDetails</h1>
        </div>
    )
}

export default PageArticleDetails

interface pageArticlesProps {
    className?: string
}