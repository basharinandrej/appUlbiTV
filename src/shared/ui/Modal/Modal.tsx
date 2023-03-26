import {FC, ReactNode} from "react";

import {setClassNames} from "@shared/lib/setClassNames";
import {Portal} from "@shared/ui/Portal/Portal";

import styles from './Modal.module.sass'

export const Modal: FC<ModalProps> = (props) => {
    const {children, isOpen, onClose} = props

    return (
        <Portal container={document.body}>
            <div
                className={setClassNames(
                styles.modal,
                {[styles.open]: isOpen})
            }>
                <div onClick={onClose} className={styles.overlay}/>
                <div className={styles.content}>{children}</div>
            </div>
        </Portal>
    )
}

interface ModalProps {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}