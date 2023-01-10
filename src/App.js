import { ThemeProvider } from '@mui/material/styles';
import { themeContext } from './context/themeContext';
import Router from './routes';

function App() {
    return (
        <ThemeProvider theme={themeContext}>
            <Router />
        </ThemeProvider>
    );
}

export default App;
