import {VFC} from "react"
import {setClassNames} from "@shared/index";
import {Comment} from "@entities/comment";

import styles from './comments.module.sass'
import {IComment} from "@entities/comment/ui/types/types";

export const Comments: VFC<CommentsProps> = (props) => {
  const {className, comments} = props

  const hasComments = Array.isArray(comments) && comments.length

  return (
      hasComments ? <div className={setClassNames(styles.comments, {}, [className])}>
        <h2 className={styles.title}>Комментарий</h2>

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
      </div> : null
  )
}

interface CommentsProps {
  className?: string
  comments: Array<IComment>
}