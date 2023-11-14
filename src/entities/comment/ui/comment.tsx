import {VFC, Fragment} from 'react'
import {AppLink, Avatar, setClassNames, SizeAvatar} from '@shared/index'
import {IComment} from './types/types'

import styles from './comment.module.sass'
import {RoutePaths} from "@app/providers/AppRoutes";

export const Comment: VFC<commentProps> = (props) => {
  const {
    name,
    avatar,
    textComment,
    className,
    userId
  } = props

  return (
      <div className={setClassNames(styles.comment, {}, [className])}>
        <AppLink to={`${RoutePaths.profile}${userId}`}  className={styles.wrapper}>
          <Fragment>
            <Avatar
                isEditable={false}
                avatarSrc={avatar}
                size={SizeAvatar.SMALL}
                className={styles.avatar}
            />
            <p className={styles.text}>
              {name}
            </p>
          </Fragment>
        </AppLink>

        <p className={styles.text}>
          {textComment}
        </p>
      </div>
  )
}

interface commentProps extends Omit<IComment, 'id' | 'articleId'> {
  className?: string

}