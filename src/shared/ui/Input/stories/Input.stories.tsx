import {Input} from '../Input'
import {ComponentStory} from '@storybook/react'

export default {
    title: 'Input',
    component: Input
}

const InputTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const InputPrimary = InputTemplate.bind({}) as typeof InputTemplate