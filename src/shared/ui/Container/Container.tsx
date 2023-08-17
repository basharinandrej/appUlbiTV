import {ReactNode, VFC} from 'react'
import {setClassNames} from '@shared/libs/setClassNames'
import {ContainerSize} from './types/ContainerSize'

import styles from './Container.module.sass'

export const Container: VFC<ContainerProps> = ({
    children,
    size = ContainerSize.LARGE,
    className,
    directionChildren = 'row'
}) => {
    return (
        <div className={setClassNames(styles.container, {
            [styles.large]: size === ContainerSize.LARGE,
            [styles.column]: directionChildren === 'column'
        }, [className])}>
            {children}
        </div>
    )
}

interface ContainerProps {
    children: ReactNode
    className?: string
    size?: ContainerSize
    directionChildren?: 'row' | 'column'
}