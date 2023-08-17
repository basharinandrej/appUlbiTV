import {memo, VFC} from "react"
import {useTranslation} from "react-i18next"
import {AppLink, setClassNames} from "@shared/index";
import {sidebarItems} from "../../../model/sidebarItems";

import styles from './SidebarList.module.sass'
import {useSelector} from "react-redux";
import {getIsAuth} from "@entities/user";

export const SidebarList: VFC<SidebarListProps> = memo((props) => {
    const {className} = props
    const {t} = useTranslation()
    const isAuth = useSelector(getIsAuth)

    const prepareSidebarItems = sidebarItems.filter((sidebarItem) => {
        if(isAuth) {
            return sidebarItem
        } else {
            return !sidebarItem.onlyAuth
        }
    })

    console.log('>>> prepareSidebarItems', prepareSidebarItems);


    return (
        <ul className={setClassNames(styles.sidebarList, {}, [className])}>
            {prepareSidebarItems.map((sidebarItem, idx) => {
                return <li key={idx} className={styles.listItem}>
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