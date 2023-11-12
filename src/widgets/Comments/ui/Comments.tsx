import {VFC} from "react"
import {setClassNames} from "@shared/index";
import {IComment} from "@entities/comment";
import {useTranslation} from "react-i18next";
import {AddNewComment} from "@features/AddNewComment";
import { CommentsListing } from "@features/CommentsListing";

import styles from './comments.module.sass'

export const Comments: VFC<CommentsProps> = (props) => {
  const {className, comments} = props
  const { t } = useTranslation('comments')

  return (
     <div className={setClassNames(styles.comments, {}, [className])}>
        <h2 className={styles.title}>{t('Комментарий')}</h2>

        <AddNewComment />

        <CommentsListing comments={comments} />
      </div>
  )
}

interface CommentsProps {
  className?: string
  comments: Array<IComment>
}