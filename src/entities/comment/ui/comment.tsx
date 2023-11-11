import {VFC} from "react"
import {Avatar, setClassNames, SizeAvatar} from "@shared/index";

import styles from './comment.module.sass'

const avatarSrc = 'https://cdn4.iconfinder.com/data/icons/profession-and-occupation-3/512/IT_specialist-occupation-avatar-job-character-profession-512.png'

export const Comment: VFC<commentProps> = (props) => {
  const {className} = props

  return (
      <div className={setClassNames(styles.comment, {}, [className])}>
        <div className={styles.wrapper}>
          <Avatar
              isEditable={false}
              avatarSrc={avatarSrc}
              size={SizeAvatar.SMALL}
              className={styles.avatar}
          />
          <p className={styles.text}>
            Андрей Башарин
          </p>
        </div>

        <p className={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, quaerat!
        </p>
      </div>
  )
}

interface commentProps {
  className?: string
}