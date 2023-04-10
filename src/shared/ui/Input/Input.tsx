import {VFC, ChangeEventHandler, useState} from 'react'

import cls from './Input.module.sass'

export const Input: VFC<InputProps> = ({
    externalValue,
    placeholder,
    externalErr,
    onChange
}) => {
    const [value, setValue] = useState(externalValue)
    const [errors, setErrors] = useState(['asdadsd', 'asdasd'])

    const isShowPlaceholder = (!value && placeholder)

    const hangleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target?.value
        onChange(value)
        setValue(value)
    }

    return <div className={cls.inputBox}>
        {isShowPlaceholder && <span className={cls.placeholder}>{placeholder}</span>}
        <input className={cls.input} value={value} onChange={hangleChange} />
        {Array.isArray(errors) && errors.map((err) => {
            return <span className={cls.err}>{err}</span>
        })}
    </div>
}

interface InputProps extends HTMLInputElement {
    externalValue: string
    placeholder: string
    onChange: (value: string) => void
    externalErr?: [string]
}