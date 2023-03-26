import {FC, ReactNode, useCallback} from "react";
import {setClassNames} from "@shared/libs/setClassNames";
import {Portal} from "@shared/ui/Portal/Portal";
import {useUnMount} from "../../libs/hooks/useUnMount"
import {useMount} from "../../libs/hooks/useMount"

import styles from './Modal.module.sass'


export const Modal: FC<ModalProps> = (props) => {
    const {children, isOpen, onClose} = props

    const handlerKeyDown = useCallback((e: KeyboardEvent) => {
        console.log('>>> 4');

        if(e.key === 'Escape') {
            onClose()
        }
    }, [])

    useMount(() => document.addEventListener('keydown', handlerKeyDown))
    useUnMount(() => document.removeEventListener('keydown', handlerKeyDown))

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