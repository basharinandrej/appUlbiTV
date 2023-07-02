import { Story } from "@storybook/react";
import { StoreProvider } from '@app/providers/StoreProvider'

export const reduxDecorator = (MyStory:Story) => {
    return (
        <StoreProvider>
            <MyStory />
        </StoreProvider>
    )
}