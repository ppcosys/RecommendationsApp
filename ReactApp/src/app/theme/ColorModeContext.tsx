import { ThemeProvider, CssBaseline } from '@mui/material';
import {createContext, useContext, useState, useMemo} from 'react';
import { createAppTheme} from './theme'
import GlobalStyles from './GlobalStyles';

interface ColorModeContextProps{
    toggleColorMode: () => void;
    mode: 'light' | 'dark';
}

const ColorModeContext = createContext<ColorModeContextProps | undefined>(undefined);

export const useColorMode = () => {
    const context = useContext(ColorModeContext);
    if(!context) throw new Error('useColorMode muat be used inside ColorModeProvider');
    return context;
};

export const ColorModeProvider = ({children }: { children: React.ReactNode}) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light');

    const toggleColorMode = () => {
        setMode(prev => (prev === 'light' ? 'dark' : 'light'));
    };
    
    const theme = useMemo(() => createAppTheme(mode), [mode]);

    return(
        <ColorModeContext.Provider value ={{ toggleColorMode, mode}}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyles />
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
};