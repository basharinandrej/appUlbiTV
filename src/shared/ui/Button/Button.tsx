import { setClassNames } from '@shared/libs/setClassNames'
import {ButtonHTMLAttributes, FC} from 'react'
import { ButtonType } from './types/interface'

import styles from './Button.module.sass'


export const Button:FC<ButtonProps> = props => {
    const { children, onClick, disabled, className, buttonType = ButtonType.PRIMARY } = props

    return (
        <button
            disabled={disabled}
            className={setClassNames(styles.Button, {
                [styles.primary]: ButtonType.PRIMARY === buttonType,
                [styles.secondary]: ButtonType.SECONDARY === buttonType,
                [styles.ghost]: ButtonType.GHOST === buttonType,
                [styles.ghostCancel]: ButtonType.GHOST_CANCEL === buttonType
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