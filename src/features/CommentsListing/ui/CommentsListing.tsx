import {VFC} from "react"
import {useStore} from "react-redux";
import {useParams, useLocation} from "react-router-dom";
import {setClassNames, useAppDispatch, useMount, useUnMount} from "@shared/index";
import {Comment, IComment} from "@entities/comment";
import {commentsListingReducer} from "@features/CommentsListing";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";
import {fetchCommentsByArticleId} from "../model/asyncActions/fetchCommentsByArticleId";

import styles from './commentsListing.module.sass'

export const CommentsListing: VFC<CommentsListingProps> = (props) => {
  const {className, comments} = props
  const dispatch = useAppDispatch()
  const store = useStore() as StoreWithStoreManager
  const {id} = useParams()
  const {pathname} = useLocation()


  const hasComments = Array.isArray(comments) && comments.length

  useMount(() => {
    dispatch({type: 'INIT_Comments'})
    store.reducerManager.add('comments', commentsListingReducer)


    if(id && pathname === `/articles/${id}`) {
      dispatch(fetchCommentsByArticleId(id))
    }
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