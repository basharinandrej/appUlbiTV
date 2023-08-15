import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {Input, setClassNames} from "@shared/index";
import {Profile} from "@pages/index";

import styles from './profileCard.module.sass'

export const ProfileCard: VFC<ProfileCardProps> = (props) => {
    const {className, profile, isEditable} = props
    const {t} = useTranslation('profile')

    return (
        <div className={setClassNames(styles.profileCard, {}, [className])}>
            <p className={setClassNames(styles.paragraph, {}, [])}>
                <strong>{t('Имя')}</strong>:
                {isEditable ? <Input className={''} onChange={() => {}} externalValue={profile.name}/> : profile.name}
            </p>
            <p className={setClassNames(styles.paragraph, {}, [])}>
                <strong>{t('Фамилия')}</strong>:
                {isEditable ? <Input className={''} onChange={() => {}} externalValue={profile.surname}/> : profile.surname}
            </p>
            <p className={setClassNames(styles.paragraph, {}, [])}>
                <strong>{t('Возраст')}</strong>:
                {isEditable ? <Input className={''} onChange={() => {}} externalValue={profile.age}/> : profile.age}
            </p>
        </div>
    )
}

interface ProfileCardProps {
    className?: string
    profile: Profile
    isEditable: boolean
}