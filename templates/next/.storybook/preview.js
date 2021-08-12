import { GlobalStyle } from "../src/core/global";
import { addDecorator } from "@storybook/react";
import { withThemesProvider } from "storybook-addon-styled-component-theme";

const themes = [];
addDecorator(withThemesProvider(themes));

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  a11y: {
    element: "#root",
    manual: false,
  },
  grid: {
    gridOn: true,
    columns: 12,
    gap: '20px',
    gutter: '50px',
    maxWidth: '1024px',
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
