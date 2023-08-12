import {ReactNode, FC} from 'react'
import { Link, LinkProps } from 'react-router-dom'
import {setClassNames} from '@shared/index'

import styles from './AppLink.module.sass'


export const AppLink:FC<AppLink> = props => {
    const {to, children, className} = props
    return (
        <Link to={to} className={setClassNames(styles.link, {}, [className])}>{children}</Link>
    )
}

interface AppLink extends LinkProps {
    children: ReactNode
    className?: string
}