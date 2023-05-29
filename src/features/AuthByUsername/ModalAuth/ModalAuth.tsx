import {FC} from "react";
import { Modal } from "@shared/index"
import {FormAuth} from "../FormAuth/FormAuth";


export const ModalAuth: FC<ModalAuthProps> = (props) => {
    const {isOpen, onClose} = props

    return <Modal isOpen={isOpen} onClose={onClose}>
        <FormAuth/>
    </Modal>
}

interface ModalAuthProps {
    isOpen: boolean
    onClose: () => void
}