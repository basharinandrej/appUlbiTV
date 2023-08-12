import {memo, VFC} from "react"
import {useTranslation} from "react-i18next"
import {AppLink, setClassNames} from "@shared/index";
import {sidebarItems} from "../../../model/sidebarItems";

import styles from './SidebarList.module.sass'

export const SidebarList: VFC<SidebarListProps> = memo((props) => {
    const {className} = props
    const {t} = useTranslation()

    return (
        <ul className={setClassNames(styles.sidebarList, {}, [className])}>
            {sidebarItems.map((sidebarItem) => {
                return <li className={styles.listItem}>
                    <AppLink to={sidebarItem.path}>
                        {sidebarItem.icon}&nbsp;{t(sidebarItem.text)}
                    </AppLink>
                </li>
            })}
        </ul>
    )
})

interface SidebarListProps {
    className?: string
}