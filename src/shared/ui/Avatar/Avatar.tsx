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
    const {className, isEditable = false, avatarSrc, onChangeFormProfile, size = SizeAvatar.MEDIUM} = props
    const {t} = useTranslation('profile')

    const showAvatar = !isEditable && avatarSrc
    const hideAvatar = !avatarSrc

    return (
        <div className={setClassNames(
            styles.avatar,
            {
                ...getClassNameForSize(size)
            },
            [className])}>
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
            {showAvatar && <img className={styles.avatarImg} src={avatarSrc} alt="avatar"/>}
            {hideAvatar && <div className={styles.stub} />}
        </div>
    )
})

interface AvatarProps {
    className?: string
    isEditable?: boolean
    avatarSrc: string
    size?: SizeAvatar
    onChangeFormProfile?: onChangeFormProfile
}