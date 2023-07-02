import { Story } from "@storybook/react";
import {DeepPartial} from "@reduxjs/toolkit";
import { StoreProvider, StateSchema } from '@app/providers/StoreProvider'

export const reduxDecorator = (state: DeepPartial<StateSchema>) => (MyStory:Story) => {
    return (
        <StoreProvider initialState={state}>
            <MyStory />
        </StoreProvider>
    )
}