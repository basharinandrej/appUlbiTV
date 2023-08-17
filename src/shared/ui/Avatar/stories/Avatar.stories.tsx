import {ComponentStory} from "@storybook/react";
import {Avatar} from "../Avatar";

import styles from './Avatar.module.sass'

export default {
    title: 'SHARED/Avatar',
    component: Avatar
}

const AvatarTemplate: ComponentStory<typeof Avatar> = (args) => <div className={styles.background}>
    <Avatar {...args} />
</div>

export const AvatarPrimary = AvatarTemplate.bind({}) as typeof AvatarTemplate

AvatarPrimary.args = {
    avatarSrc: 'https://cdn4.iconfinder.com/data/icons/profession-and-occupation-3/512/IT_specialist-occupation-avatar-job-character-profession-512.png',
    isEditable: false
}