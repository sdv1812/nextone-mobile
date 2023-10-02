import { Platform } from 'react-native';
import { configureFonts, MD3LightTheme as DefaultTheme, MD3Theme } from 'react-native-paper';

const fontConfig = {
    customVariant: {
      fontFamily: Platform.select({
        web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        ios: 'System',
        default: 'sans-serif',
      }),
      fontWeight: '400',
      letterSpacing: 0.5,
      lineHeight: 22,
      fontSize: 20,
    }
  };
  

const theme: MD3Theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      // elevation: {
      //   ...DefaultTheme.colors.elevation,
      //   "level1": "yellow",
      // },
    },
    fonts: configureFonts({config: fontConfig}),
  };

  export { theme };