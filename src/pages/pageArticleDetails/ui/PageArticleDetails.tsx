import {VFC} from 'react'
import {setClassNames} from '@shared/index'
import {ArticleDetails} from '@entities/article'
import {MainContentContainer} from "@widgets/MainContentContainer";

const PageArticleDetails: VFC<pageArticlesProps> = (props) => {
    const {className} = props

    return (
        <MainContentContainer className={setClassNames('', {}, [className])}>
            <ArticleDetails />
        </MainContentContainer>
    )
}

export default PageArticleDetails

interface pageArticlesProps {
    className?: string
}