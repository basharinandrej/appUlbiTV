import {VFC} from 'react'
import {setClassNames, Avatar} from '@shared/index'
import {Profile} from '@pages/index'
import {getProfileFields} from '../model/profileFields'
import {onChangeFormProfile} from '../types/onChangeFormProfile'
import { ProfileField } from './components/profileField/profileField'

import styles from './profileCard.module.sass'

export const ProfileCard: VFC<ProfileCardProps> = (props) => {
    const {className, profile, isEditingMode, onChangeFormProfile} = props

    return (
        <div className={setClassNames(styles.profileCard, {}, [className])}>

            {profile?.avatar && <Avatar
                isEditingMode={isEditingMode}
                avatarSrc={profile.avatar}
                onChangeFormProfile={onChangeFormProfile}
            />}

            {getProfileFields(profile).map((profileField, idx) => {
                return <ProfileField
                    key={idx}
                    isEditable={isEditingMode}
                    profileField={profileField}
                    onChangeFormProfile={onChangeFormProfile}
                />
            })}

        </div>
    )
}

interface ProfileCardProps {
    className?: string
    profile: Profile
    isEditingMode: boolean
    onChangeFormProfile: onChangeFormProfile
}