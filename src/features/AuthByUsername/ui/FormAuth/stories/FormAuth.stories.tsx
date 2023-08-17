import FormAuth from '../../FormAuth/ui/FormAuth'
import {ComponentStory} from '@storybook/react'
import {reduxDecorator} from '../../../../../../config/.storybook/decorators/reduxDecorator'


export default {
    title: 'Features/FormAuth',
    component: FormAuth
}

const FormAuthTemplate: ComponentStory<typeof FormAuth> = (args) => <FormAuth {...args} />


export const FormAuthPrimary = FormAuthTemplate.bind({}) as typeof FormAuthTemplate
FormAuthPrimary.decorators = [reduxDecorator({})]

export const FormAuthError = FormAuthTemplate.bind({}) as typeof FormAuthTemplate
FormAuthError.decorators = [reduxDecorator({
    login: {
        error: 'Ошибка'
    }
})]

