import {VFC, MouseEvent} from "react"
import {useStore} from "react-redux";
import {Button, ButtonType, Input, setClassNames, useAppDispatch, useMount, useUnMount} from "@shared/index";
import {useTranslation} from "react-i18next";
import {newCommentReducer, setTextComment} from "../model/slice/newCommentSlice";
import {StoreWithStoreManager} from "@app/providers/StoreProvider";

import styles from './addNewComment.module.sass'


export const AddNewComment: VFC<addNewCommentProps> = (props) => {
  const {className} = props
  const { t } = useTranslation('comments')

  const dispatch = useAppDispatch()
  const store = useStore() as StoreWithStoreManager

  useMount(() => {
    dispatch({type: 'INIT_NewComment'})
    store.reducerManager.add('newComment', newCommentReducer)
  })
  useUnMount(() => {
    dispatch({type: 'UNINIT_NewComment'})
    store.reducerManager.remove('newComment')
  })

  const onChangeHandler = (text: string) => {
    dispatch(setTextComment(text))
  }

  const onClickHandler = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('>>>> onClickHandler', e.target)
  }

  return (
      <div className={setClassNames(styles.addNewComment, {}, [className])}>
        <Input onChange={onChangeHandler} className={styles.input} placeholder={t('Введите новый комментарий')}/>
        <Button
            buttonType={ButtonType.PRIMARY}
            onClick={onClickHandler}
        >
          {t('Отправить комментарий')}
        </Button>
      </div>
  )
}

interface addNewCommentProps {
  className?: string
}