import {SizeAvatar} from '../enums/sizeAvatar'

import styles from '../Avatar.module.sass'

export const getClassNameForSize = (size: SizeAvatar) => {

  return {
    [styles.mediumAvatar]: size === SizeAvatar.MEDIUM,
    [styles.smallAvatar]: size === SizeAvatar.SMALL
  }
}