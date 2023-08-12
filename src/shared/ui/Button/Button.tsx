import { setClassNames } from '@shared/libs/setClassNames'
import {ButtonHTMLAttributes, FC} from 'react'
import { ButtonType } from './types/interface'

import styles from './Button.module.sass'


export const Button:FC<ButtonProps> = props => {
    const { children, onClick, className, buttonType = ButtonType.PRIMARY } = props

    return (
        <button
            className={setClassNames(styles.Button, {
                [styles.primary]: ButtonType.PRIMARY === buttonType,
                [styles.secondary]: ButtonType.SECONDARY === buttonType,
                [styles.ghost]: ButtonType.GHOST === buttonType
            }, [className])}
            onClick={onClick}
        >
            { children }
        </button>
    )
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    buttonType?: ButtonType
}