import {ChangeEvent} from "react"
import {setClassNames} from "@shared/index";

import styles from './Select.module.sass'

export const Select = function<T extends string>(props: SelectProps<T>) {
  const {className, options, onChange, externalValue} = props

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    if(onChange) {
      onChange(e.target.value as T)
    }
  }

  return (
      <select
          value={externalValue}
          onChange={onChangeHandler}
          className={setClassNames(styles.select, {}, [className])}
      >
        {options.map((option, idx) => <option key={idx} value={option.value}>{option.text}</option>)}
      </select>
  )
}

export interface SelectOption<T> {
  value: T,
  text: string
}

interface SelectProps<T> {
  className?: string
  options: SelectOption<T>[]
  onChange: (value: T) => void
  externalValue: T
}