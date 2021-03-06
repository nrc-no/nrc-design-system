import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { NativeBaseProvider } from 'native-base';
import { theme } from '../src';
import {
  Roboto_400Regular as Roboto400Regular,
  Roboto_400Regular_Italic as Roboto400RegularItalic,
  Roboto_500Medium as Roboto500Medium,
  Roboto_700Bold as Roboto700Bold,
  useFonts,
} from '@expo-google-fonts/roboto';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {name: 'light', value: theme.colors.themeLight},
      {name: 'dark', value: theme.colors.themeDark}
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      order: ['Foundation', '*'], 
    },
  },};

const themeAndFontDecorator = (Story) => {
  useFonts({
    Roboto400Regular,
    Roboto400RegularItalic,
    Roboto500Medium,
    Roboto700Bold,
  });
  return (
    <NativeBaseProvider theme={theme}>
      <Story />
    </NativeBaseProvider>
  )
};


export const decorators = [
  withBackgrounds,
  themeAndFontDecorator
];