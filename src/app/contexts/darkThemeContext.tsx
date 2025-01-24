'use client';

import React, { createContext, useContext, useState } from "react";

type ThemeContextType = {
  darkTheme: "dark" | "light";
  toggleTheme: () => void;
};

const DarkThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState<"light" | "dark">("light");

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <DarkThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </DarkThemeContext.Provider>
  );
};

export const useDarkTheme = (): ThemeContextType => {
  const context = useContext(DarkThemeContext);
  if (!context) {
    throw new Error("useDarkTheme must be used within a ThemeProvider");
  }
  return context;
};
