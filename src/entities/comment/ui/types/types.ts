export interface IComment {
  id: number,
  avatarSrc?: string,
  name: string,
  textComment: string
  userId: number
  articleId: string
}