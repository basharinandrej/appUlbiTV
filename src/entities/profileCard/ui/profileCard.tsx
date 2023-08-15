import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {Input, setClassNames, TypeInput} from "@shared/index";
import {Profile} from "@pages/index";

import styles from './profileCard.module.sass'

export const ProfileCard: VFC<ProfileCardProps> = (props) => {
    const {className, profile, isEditable, onChangeFormProfile} = props
    const {t} = useTranslation('profile')

    return (
        <div className={setClassNames(styles.profileCard, {}, [className])}>
            <div className={setClassNames(styles.paragraph, {}, [])}>
                <strong>{t('Имя')}</strong>:&nbsp;
                {isEditable
                    ? <Input
                        className={''}
                        onChange={(value) => onChangeFormProfile('name', value)}
                        externalValue={profile.name}
                        typeInput={TypeInput.GHOST}
                    /> : profile.name}
            </div>
            <div className={setClassNames(styles.paragraph, {}, [])}>
                <strong>{t('Фамилия')}</strong>:&nbsp;
                {isEditable
                    ? <Input
                        className={''}
                        onChange={(value) => onChangeFormProfile('surname', value)}
                        externalValue={profile.surname}
                        typeInput={TypeInput.GHOST}
                    /> : profile.surname}
            </div>
            <div className={setClassNames(styles.paragraph, {}, [])}>
                <strong>{t('Возраст')}</strong>:&nbsp;
                {isEditable
                    ? <Input
                        className={''}
                        onChange={(value) => onChangeFormProfile('age', value)}
                        externalValue={profile.age}
                        typeInput={TypeInput.GHOST}
                    /> : profile.age}
            </div>
        </div>
    )
}

interface ProfileCardProps {
    className?: string
    profile: Profile
    isEditable: boolean
    onChangeFormProfile: (key: keyof Profile, value: Profile[keyof Profile]) => void
}