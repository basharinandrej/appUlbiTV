import {Button} from '../Button'
import {ComponentStory} from '@storybook/react'
import {ButtonType} from '@shared/ui/Button/types/interface'

export default {
    title: 'Button',
    component: Button
}

const ButtonTemplate: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const ButtonPrimary = ButtonTemplate.bind({}) as typeof ButtonTemplate
ButtonPrimary.args = {
    children: 'Primary',
    onClick: () => console.log('click Primary'),
    buttonType: ButtonType.PRIMARY
}

export const ButtonSecondary = ButtonTemplate.bind({}) as typeof ButtonTemplate
ButtonSecondary.args = {
    children: 'Secondary',
    onClick: () => console.log('click Secondary'),
    buttonType: ButtonType.SECONDARY
}