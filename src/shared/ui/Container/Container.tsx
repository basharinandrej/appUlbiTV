import {ReactNode, VFC} from "react"
import {setClassNames} from "@shared/libs/setClassNames";

import styles from './Container.module.sass'

export const Container: VFC<ContainerProps> = ({children}) => {
    return (
        <div className={setClassNames(styles.container, {}, [])}>
            {children}
        </div>
    )
}

interface ContainerProps {
    children: ReactNode
}