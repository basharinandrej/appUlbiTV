import {VFC} from "react"
import {Button, ButtonType, Input, setClassNames} from "@shared/index";
import {useTranslation} from "react-i18next";

import styles from './addNewComment.module.sass'

export const AddNewComment: VFC<addNewCommentProps> = (props) => {
  const {className} = props
  const { t } = useTranslation('comments')

  const onChangeHandler = (e: any) => {
    console.log('>>>> e', e)
  }

  return (
      <div className={setClassNames(styles.addNewComment, {}, [className])}>
        <Input onChange={onChangeHandler} className={styles.input} placeholder={t('Введите новый комментарий')}/>
        <Button
            buttonType={ButtonType.PRIMARY}
        >
          {t('Отправить комментарий')}
        </Button>
      </div>
  )
}

interface addNewCommentProps {
  className?: string
}