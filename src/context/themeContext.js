import { createTheme } from '@mui/material/styles';
import { grey, blue } from '@mui/material/colors';

export const themeContext = createTheme({
    palette: {
        main: blue,
        primary: {
            main: '#5D5FEF',
        },
        secondary: grey,
    },
});
