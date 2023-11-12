import {IComment} from "@entities/comment";

export interface CommentsListingSliceSchema {
  articles: IComment[]
}