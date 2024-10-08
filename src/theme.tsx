import React, { createContext, useContext, useEffect, ReactNode } from "react";

interface ThemeContextProps {
  // Define any theme-related properties here if needed
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  useEffect(() => {
    // Force the theme to light mode
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  }, []);

  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
