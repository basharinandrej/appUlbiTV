import {FC, ReactNode} from 'react'
import styles from './MainLayout.module.sass'

export const MainLayout:FC<MainLayoutProps> = ({children}) => {

    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}

interface MainLayoutProps {
    children: ReactNode
}