import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {setClassNames} from "@shared/libs/setClassNames";
import {AppLink} from "@shared/index";

import styles from './Sidebar.module.sass'

export const Sidebar: VFC = () => {
    const {t} = useTranslation()
    return (
        <div className={setClassNames(styles.Sidebar, {}, [])}>
            <nav>
                <ul>
                    <AppLink to={'/'} className={styles.linkGap}>{t('Home')}</AppLink>
                    <AppLink to={'/about'}>{t('About')}</AppLink>
                    <li>3</li>
                </ul>
            </nav>
        </div>
    )
}
