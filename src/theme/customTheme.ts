import { createTheme, ThemeOptions } from '@mui/material';

export const customTheme: ThemeOptions = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            light: '#757ce8',
            main: '#3f50b5',
            dark: '#002884',
        },
        background: {
            default: '#111',
            paper: '#151515',
        }
    }
});