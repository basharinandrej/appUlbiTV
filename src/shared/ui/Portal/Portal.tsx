import {FC, ReactNode} from "react";
import ReactDOM from "react-dom";


export const Portal: FC<PortalProps> = ({container=document.body,children}) => {

    return ReactDOM.createPortal(children, container)
}

interface PortalProps {
    children: ReactNode
    container: HTMLElement
}
