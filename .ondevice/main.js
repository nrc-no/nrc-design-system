module.exports = {
  stories: [
    "../stories/**/*.stories.@(js|jsx|ts|tsx)",
  ],  addons: [
    "@storybook/addon-ondevice-notes",
    "@storybook/addon-ondevice-controls",
    "@storybook/addon-ondevice-backgrounds",
    "@storybook/addon-ondevice-actions",
  ],
  staticDirs: ['./static'],
};
