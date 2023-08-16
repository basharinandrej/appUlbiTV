import {VFC} from "react"
import {useTranslation} from "react-i18next"
import {TypeInput} from "@shared/index";

import {setClassNames} from "../../libs/setClassNames"
import {Input} from "../Input/Input";
import {onChangeFormProfile} from "@entities/profileCard";

import styles from './Avatar.module.sass'

export const Avatar: VFC<AvatarProps> = (props) => {
    const {className, isEditable, avatarSrc, onChangeFormProfile} = props
    const {t} = useTranslation('profile')

    return (
        <div className={setClassNames(styles.avatar, {}, [className])}>
            {isEditable &&
                <div className={styles.profileField}>
                    <strong>{t('Аватар')}</strong>:&nbsp;

                    <Input
                        className={''}
                        onChange={(value) => onChangeFormProfile('avatar', value)}
                        externalValue={avatarSrc}
                        typeInput={TypeInput.GHOST}
                    />
                </div>
            }
            {!isEditable && <img className={styles.avatarImg} src={avatarSrc} alt="avatar"/>}
        </div>
    )
}

interface AvatarProps {
    className?: string
    isEditable: boolean
    avatarSrc: string
    onChangeFormProfile: onChangeFormProfile
}