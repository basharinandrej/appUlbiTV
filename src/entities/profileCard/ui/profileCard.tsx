import {VFC} from "react"
import {setClassNames} from "@shared/index";
import {Profile} from "@pages/index";
import {getProfileFields} from "../model/profileFields";
import { ProfileField } from "./components/profileField/profileField";
import {onChangeFormProfile} from "../types/onChangeFormProfile";

import styles from './profileCard.module.sass'

export const ProfileCard: VFC<ProfileCardProps> = (props) => {
    const {className, profile, isEditable, onChangeFormProfile} = props

    return (
        <div className={setClassNames(styles.profileCard, {}, [className])}>

            {getProfileFields(profile).map((profileField) => {
                return <ProfileField
                    isEditable={isEditable}
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
    isEditable: boolean
    onChangeFormProfile: onChangeFormProfile
}