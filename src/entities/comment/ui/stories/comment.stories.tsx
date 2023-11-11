import {Comment} from '@entities/comment'
import {ComponentStory} from "@storybook/react";

const avatarSrc = 'https://cdn4.iconfinder.com/data/icons/profession-and-occupation-3/512/IT_specialist-occupation-avatar-job-character-profession-512.png'

export default {
  title: 'ENTITIES/comment',
  component: Comment
}

const CommentTemplate: ComponentStory<typeof Comment> = (args) => <Comment {...args} />

export const CommentPrimary = CommentTemplate.bind({}) as typeof CommentTemplate
CommentPrimary.args = {
  name: 'Башарин Андрей',
  textComment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, natus!',
  avatarSrc,
}