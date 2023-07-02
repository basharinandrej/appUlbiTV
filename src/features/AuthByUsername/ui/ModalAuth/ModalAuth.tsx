import {FC, Suspense} from "react";
import FormAuth from "../FormAuth/ui/FormAuth.async";
import {Loader, Modal} from "@shared/index"


export const ModalAuth: FC<ModalAuthProps> = (props) => {
    const {isOpen, onClose} = props

    return <Modal isLazy={true} isOpen={isOpen} onClose={onClose}>
        <Suspense fallback={<Loader />}>
            <FormAuth/>
        </Suspense>
    </Modal>
}

interface ModalAuthProps {
    isOpen: boolean
    onClose: () => void
}