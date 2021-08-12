module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-viewport",
    "storybook-addon-pseudo-states",
    "@storybook/addon-toolbars",
    "storybook-addon-styled-component-theme/dist/preset",
    '@storybook/addon-backgrounds',
    'storybook-addon-outline',
    'storybook-addon-grid/preset',
  ],
};
