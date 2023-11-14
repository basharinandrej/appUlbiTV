import {VFC} from "react"
import {useStore} from "react-redux";
import {setClassNames, useAppDispatch, useMount, useUnMount} from "@shared/index";
import {Comment, IComment} from "@entities/comment";
import {commentsListingReducer} from "@features/CommentsListing";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";

import styles from './commentsListing.module.sass'

export const CommentsListing: VFC<CommentsListingProps> = (props) => {
  const {className, comments, fetchComments} = props
  const dispatch = useAppDispatch()
  const store = useStore() as StoreWithStoreManager

  const hasComments = Array.isArray(comments) && comments.length

  useMount(() => {
    dispatch({type: 'INIT_Comments'})
    store.reducerManager.add('comments', commentsListingReducer)

    fetchComments()
  })

  useUnMount(() => {
    dispatch({type: 'UNINIT_Comments'})
    store.reducerManager.remove('comments')
  })

  return (
    hasComments
      ? <div className={setClassNames(styles.commentsListing, {}, [className])}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              avatar={comment?.user.avatar}
              name={comment.name}
              textComment={comment.textComment}
              className={styles.comment}
              userId={comment.userId}
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
  fetchComments: () => void
}