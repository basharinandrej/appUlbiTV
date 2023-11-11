import {Comment} from '@entities/comment'
import {ComponentStory} from "@storybook/react";

export default {
  title: 'ENTITIES/comment',
  component: Comment
}

const CommentTemplate: ComponentStory<typeof Comment> = (args) => <Comment {...args} />

export const CommentPrimary = CommentTemplate.bind({}) as typeof CommentTemplate
