import { Story } from "@storybook/react";
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18next'


export const i18nextDecorator = (MyStory: Story) => {

    return (
        <I18nextProvider i18n={i18n}>
            <MyStory />
        </I18nextProvider>
    )
}

