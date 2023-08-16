import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {Input, TypeInput, setClassNames} from "@shared/index";
import { ProfileField as IProfileField } from "../../../types/profileField";
import {onChangeFormProfile} from "../../../types/onChangeFormProfile";

import styles from './profileField.module.sass'

export const ProfileField: VFC<profileFieldProps> = (props) => {
    const {className, isEditable, profileField, onChangeFormProfile} = props
    const {t} = useTranslation('profile')

    return (
        <div className={setClassNames(styles.profileField, {}, [className])}>
            <strong>{t(profileField.label)}</strong>:&nbsp;
            {isEditable
                ? <Input
                    className={''}
                    onChange={(value) => onChangeFormProfile(profileField.key, value)}
                    externalValue={profileField.externalValue}
                    typeInput={TypeInput.GHOST}
                />
                : profileField.externalValue}

        </div>
    )
}

interface profileFieldProps {
    className?: string
    isEditable: boolean
    profileField: IProfileField
    onChangeFormProfile: onChangeFormProfile
}