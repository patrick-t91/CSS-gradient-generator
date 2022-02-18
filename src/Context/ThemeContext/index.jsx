import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children}) => {
    const [isDarkTheme, setisDarkTheme] = useState(false);
    
    const handleTheme = () => {
        if (isDarkTheme === false) {
            setisDarkTheme(true);
        } else { 
            setisDarkTheme(false);
        }
    }

    const data = { isDarkTheme, handleTheme};
    
    return <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
}
