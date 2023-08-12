import {FC, ReactNode} from 'react'
import {Sidebar} from "@widgets/Sidebar";
import {Navbar} from "@widgets/Navbar/Navbar";
import {Container} from "@shared/index";

import styles from './MainLayout.module.sass'

export const MainLayout:FC<MainLayoutProps> = ({children}) => {

    return (
        <div className={styles.layout}>
            <Sidebar />
            <Navbar />

            <Container className={styles.container} directionChildren={'column'}>
                {children}
            </Container>
        </div>
    )
}

interface MainLayoutProps {
    children: ReactNode
}