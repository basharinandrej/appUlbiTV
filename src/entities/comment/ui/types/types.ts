import {UserSchema} from "@entities/user";

export interface IComment {
  id: number,
  avatar?: string,
  name: string,
  textComment: string
  userId: number
  articleId: string
  user?: UserSchema
}