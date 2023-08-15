import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {setClassNames} from "@shared/index";
import {Profile} from "@pages/index";

import styles from './profileCard.module.sass'

export const ProfileCard: VFC<ProfileCardProps> = (props) => {
    const {className, profile} = props
    const {t} = useTranslation('profile')

    return (
        <div className={setClassNames(styles.profileCard, {}, [className])}>
            <p className={setClassNames(styles.paragraph, {}, [])}>
                <strong>{t('Имя')}</strong>: {profile.name}
            </p>
            <p className={setClassNames(styles.paragraph, {}, [])}>
                <strong>{t('Фамилия')}</strong>: {profile.surname}
            </p>
            <p className={setClassNames(styles.paragraph, {}, [])}>
                <strong>{t('Возраст')}</strong>: {profile.age}
            </p>

        </div>
    )
}

interface ProfileCardProps {
    className?: string
    profile: Profile
}