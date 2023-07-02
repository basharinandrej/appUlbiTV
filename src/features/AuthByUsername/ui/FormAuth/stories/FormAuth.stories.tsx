import FormAuth from "../../FormAuth/ui/FormAuth";
import {ComponentStory} from "@storybook/react";


export default {
    title: 'Features/FormAuth',
    component: FormAuth
}

const FormAuthTemplate: ComponentStory<typeof FormAuth> = (args) => <FormAuth {...args} />


export const FormAuthPrimary = FormAuthTemplate.bind({}) as typeof FormAuthTemplate
