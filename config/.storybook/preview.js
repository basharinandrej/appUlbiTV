import {addDecorator} from "@storybook/react";
import {styleDecorator} from "./decorators/styleDecorator";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(styleDecorator)