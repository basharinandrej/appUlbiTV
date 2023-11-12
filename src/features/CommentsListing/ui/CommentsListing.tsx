import {VFC} from "react"
import {setClassNames} from "@shared/index";
import {Comment, IComment} from "@entities/comment";

import styles from './commentsListing.module.sass'

export const CommentsListing: VFC<CommentsListingProps> = (props) => {
  const {className, comments} = props

  const hasComments = Array.isArray(comments) && comments.length

  return (
    hasComments
      ? <div className={setClassNames(styles.commentsListing, {}, [className])}>
        {comments.map((comment) => {
          return (
            <Comment
                key={comment.id}
                avatarSrc={comment.avatarSrc}
                name={comment.name}
                textComment={comment.textComment}
                className={styles.comment}
            />
          )
        })}
      </div>
    : null
  )
}

interface CommentsListingProps {
  className?: string
  comments: Array<IComment>
}