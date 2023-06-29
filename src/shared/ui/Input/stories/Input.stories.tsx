import {Input} from '../Input'
import {ComponentStory} from '@storybook/react'
import {initialProps, controls} from "@shared/ui/Button/stories/constans";

export default {
    title: 'Input',
    component: Input
}

const InputTemplate: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const InputPrimary = InputTemplate.bind({}) as typeof InputTemplate
InputPrimary.argTypes = controls
InputPrimary.args = initialProps
