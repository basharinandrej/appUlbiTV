import {VFC} from 'react'
import {setClassNames} from '@shared/index'
import {ArticleDetails} from '@entities/article'

const PageArticleDetails: VFC<pageArticlesProps> = (props) => {
    const {className} = props

    return (
        <div className={setClassNames('', {}, [className])}>
            <ArticleDetails />
        </div>
    )
}

export default PageArticleDetails

interface pageArticlesProps {
    className?: string
}