import {VFC} from "react"
import {setClassNames} from "@shared/index";
import {SidebarList} from "../ui/components/SidebarList/SidebarList";

import styles from './Sidebar.module.sass'

export const Sidebar: VFC = () => {
    return (
        <nav className={setClassNames(styles.Sidebar, {}, [])}>
            <SidebarList />
        </nav>
    )
}
