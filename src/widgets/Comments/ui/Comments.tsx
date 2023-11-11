import {VFC} from "react"
import {setClassNames} from "@shared/index";
import {Comment} from "@entities/comment";
import {IComment} from "@entities/comment/ui/types/types";
import {useTranslation} from "react-i18next";
import {AddNewComment} from "@features/AddNewComment";

import styles from './comments.module.sass'

export const Comments: VFC<CommentsProps> = (props) => {
  const {className, comments} = props
  const { t } = useTranslation('comments')

  const hasComments = Array.isArray(comments) && comments.length

  return (
     <div className={setClassNames(styles.comments, {}, [className])}>
        <h2 className={styles.title}>{t('Комментарий')}</h2>

        <AddNewComment />

        { hasComments ? comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              avatarSrc={comment.avatarSrc}
              name={comment.name}
              textComment={comment.textComment}
              className={styles.comment}
            />
          )
        }): null }
      </div>
  )
}

interface CommentsProps {
  className?: string
  comments: Array<IComment>
}