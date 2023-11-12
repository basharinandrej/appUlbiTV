import {useCallback, VFC} from 'react'
import {useSelector, useStore} from 'react-redux'
import {Button, ButtonType, Input, setClassNames, useAppDispatch, useMount, useUnMount} from '@shared/index'
import {useTranslation} from 'react-i18next'
import {newCommentReducer, setTextComment, clearTextComment} from '../model/slice/newCommentSlice'
import {StoreWithStoreManager} from '@app/providers/StoreProvider'
import {getTextComment} from '../model/selectors/selectors'

import styles from './addNewComment.module.sass'


export const AddNewComment: VFC<addNewCommentProps> = (props) => {
  const {className, sendNewComment} = props
  const { t } = useTranslation('comments')

  const dispatch = useAppDispatch()
  const store = useStore() as StoreWithStoreManager

  const textComment = useSelector(getTextComment)

  useMount(() => {
    dispatch({type: 'INIT_NewComment'})
    store.reducerManager.add('newComment', newCommentReducer)
  })
  useUnMount(() => {
    dispatch({type: 'UNINIT_NewComment'})
    store.reducerManager.remove('newComment')
  })

  const onChangeHandler = useCallback((text: string) => {
    dispatch(setTextComment(text))
  }, [])

  const onClickHandler = () => {
    sendNewComment()
    dispatch(clearTextComment())
  }

  return (
      <div className={setClassNames(styles.addNewComment, {}, [className])}>
        <Input
          onChange={onChangeHandler}
          className={styles.input}
          placeholder={t('Введите новый комментарий')}
          externalValue={textComment}
        />
        <Button
            buttonType={ButtonType.PRIMARY}
            onClick={onClickHandler}
            disabled={!textComment}
        >
          {t('Отправить комментарий')}
        </Button>
      </div>
  )
}

interface addNewCommentProps {
  className?: string
  sendNewComment: () => void
}