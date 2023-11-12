import {VFC} from 'react'
import {setClassNames} from '@shared/index'

import styles from './Tag.module.sass'

export const Tag: VFC<TagProps> = (props) => {
  const {className, text} = props

  return (
      <div className={setClassNames(styles.tag, {}, [className])}>
        <p>{text}</p>
      </div>
  )
}

interface TagProps {
  className?: string
  text: string
}