import {VFC} from 'react'
import {Avatar, setClassNames, SizeAvatar} from '@shared/index'
import {IComment} from './types/types'

import styles from './comment.module.sass'

export const Comment: VFC<commentProps> = (props) => {
  const {
    name,
    avatar,
    textComment,
    className
  } = props

  return (
      <div className={setClassNames(styles.comment, {}, [className])}>
        <div className={styles.wrapper}>
          <Avatar
              isEditable={false}
              avatarSrc={avatar}
              size={SizeAvatar.SMALL}
              className={styles.avatar}
          />
          <p className={styles.text}>
            {name}
          </p>
        </div>

        <p className={styles.text}>
          {textComment}
        </p>
      </div>
  )
}

interface commentProps extends Omit<IComment, 'id' | 'userId' | 'articleId'> {
  className?: string
}