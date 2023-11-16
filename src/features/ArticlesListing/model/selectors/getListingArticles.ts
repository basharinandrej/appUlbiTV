import {StateSchema} from '@app/providers/StoreProvider'
import {Article} from '@entities/article'


export const getListingArticles = (state: StateSchema) => {
    return state.articles?.data?.map((article): Article => {
        return {
            id: article.id,
            title: article.title,
            subtitle: article.subtitle,
            img: article.img,
            views: article.views,
            createdAt: article.createdAt,
            tags: article.tags,
            comments: article.comments,
            blocks: article.blocks
        }
    })
}