import { themes } from "@storybook/theming";
import { type Preview } from "@storybook/react";
import "../src/styles/globals.scss";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
    layout: "fullscreen"
  },
};

export default preview;
