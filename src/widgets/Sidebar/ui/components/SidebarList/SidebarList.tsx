import {memo, VFC} from 'react'
import {useTranslation} from 'react-i18next'
import {AppLink, setClassNames} from '@shared/index'
import {useSelector} from 'react-redux'
import {getSidebarItems} from "../../../model/selectors/getSidebarItems";

import styles from './SidebarList.module.sass'

export const SidebarList: VFC<SidebarListProps> = memo((props) => {
    const {className} = props
    const {t} = useTranslation()

    const prepareSidebarItems = useSelector(getSidebarItems)

    return (
        <ul className={setClassNames(styles.sidebarList, {}, [className])}>
            {prepareSidebarItems.map((sidebarItem, idx) => {
                return <li key={idx} className={styles.listItem}>
                    <AppLink to={sidebarItem?.path}>
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