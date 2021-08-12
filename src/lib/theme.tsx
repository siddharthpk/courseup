import { extendTheme, ThemeConfig } from '@chakra-ui/react';

import { CalendarTheme } from 'pages/calendar/styles/calendar';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

export const customTheme = extendTheme({
  config,

  colors: {
    dark: { main: '#1A202C', background: '#151922', header: '#988F81', brand: '#B0C3DA', caption: '#799EC1' },
    light: { background: '#E4E4E4', brand: '#222B49', caption: '#4C6EA5' },
  },

  styles: {
    global: (props) => ({
      ':focus:not(:focus-visible)': {
        boxShadow: 'none !important',
      },
      ...CalendarTheme(props.colorMode),
    }),
  },
});