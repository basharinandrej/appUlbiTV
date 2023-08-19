const enum ArticleBlockType {
    CODE = "CODE",
    TEXT = "TEXT",
    IMAGE = "IMAGE",
}

export interface Article {
    id: string
    title: string
    subtitle: string
    img: string
    views: number
    createdAt: string
    tags: Array<string>
    blocks: Array<ArticleBlockText | ArticleBlockCode | ArticleBlockImage>
}

interface ArticleBlockBase {
    id: string
    type: ArticleBlockType
}

interface ArticleBlockText extends ArticleBlockBase {
    title: string
    paragraphs: Array<string>
    type: ArticleBlockType.TEXT
}
interface ArticleBlockCode extends ArticleBlockBase {
    code: string
    type: ArticleBlockType.CODE
}
interface ArticleBlockImage extends ArticleBlockBase {
    src: string
    title: string
    type: ArticleBlockType.IMAGE
}
