import {Article, ArticleBlockType} from "@entities/article";


export function mapArticlesToArticlesWithOnlyOneTextBlock(articles: Article[]) {
  return articles.map((article) => {
    return {
      ...article,
      blocks: [article.blocks.find((block) => block.type === ArticleBlockType.TEXT)]
    }
  })
}