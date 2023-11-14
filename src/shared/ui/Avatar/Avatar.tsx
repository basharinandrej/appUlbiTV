import {memo, VFC} from 'react'
import {useTranslation} from 'react-i18next'
import {setClassNames} from '../../libs/setClassNames'
import {Input} from '../Input/Input'
import {TypeInput} from '../Input/types/enums'
import {getClassNameForSize} from './utils/getClassNameForSize'
import {SizeAvatar} from './enums/sizeAvatar'

import {onChangeFormProfile} from '@entities/profileCard'

import styles from './Avatar.module.sass'


export const Avatar: VFC<AvatarProps> = memo((props) => {
    const {className, isEditingMode = false, avatarSrc, onChangeFormProfile, size = SizeAvatar.MEDIUM} = props
    const {t} = useTranslation('profile')

    const showAvatar = !isEditingMode && avatarSrc
    const hideAvatar = !avatarSrc

    return (
        <div className={setClassNames(
            styles.avatar,
            {
                ...getClassNameForSize(size)
            },
            [className])}>
            {isEditingMode &&
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
            {showAvatar && <img className={styles.avatarImg} src={avatarSrc} alt="avatar"/>}
            {hideAvatar && <div className={styles.stub} />}
        </div>
    )
})

interface AvatarProps {
    className?: string
    isEditingMode?: boolean
    avatarSrc: string
    size?: SizeAvatar
    onChangeFormProfile?: onChangeFormProfile
}