import {Fragment, VFC} from 'react'
import {AppLink, Avatar, Button, ButtonType, setClassNames, SizeAvatar} from '@shared/index'
import {IComment} from './types/types'
import {RoutePaths} from "@app/providers/AppRoutes";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import styles from './comment.module.sass'

export const Comment: VFC<commentProps> = (props) => {
  const {
    id,
    name,
    avatar,
    textComment,
    className,
    userId,
    onDeleteComment,
    canDelete
  } = props

  return (
      <div className={setClassNames(styles.comment, {}, [className])}>
        <div className={styles.box}>
          <AppLink to={`${RoutePaths.profile}${userId}`} className={styles.wrapper}>
            <Fragment>
              <Avatar
                isEditingMode={false}
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

        {canDelete && <Button buttonType={ButtonType.GHOST_CANCEL} onClick={() => onDeleteComment(id.toString())}>
          <FontAwesomeIcon icon={faTrash}/>
        </Button>}
      </div>
  )
}

interface commentProps extends Omit<IComment, 'articleId'> {
  className?: string
  onDeleteComment: (commentId: string) => void
}