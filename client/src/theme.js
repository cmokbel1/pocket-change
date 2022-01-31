import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#2a2e30',
    },
    secondary: {
      main: '#008037',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;