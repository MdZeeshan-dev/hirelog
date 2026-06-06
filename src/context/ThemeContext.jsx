import { createContext, useContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider
      value={{
        darkMode: true,
        setDarkMode: () => {},
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}


export const useTheme = () => useContext(ThemeContext);

export { ThemeContext, ThemeProvider };