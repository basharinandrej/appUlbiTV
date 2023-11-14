import {UserSchema} from "@entities/user";

export interface IComment {
  id: number,
  name: string,
  textComment: string
  userId: number
  articleId: string
  canDelete: boolean
  avatar?: string,
  user?: UserSchema
}