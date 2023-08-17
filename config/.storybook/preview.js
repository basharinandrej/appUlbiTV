import {addDecorator} from "@storybook/react";
import {styleDecorator} from "./decorators/styleDecorator";
import {i18nextDecorator} from "./decorators/i18nextDecorator";

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
addDecorator(i18nextDecorator)