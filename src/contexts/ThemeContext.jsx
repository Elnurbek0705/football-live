import { createContext, useState, useMemo } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// 1. Kontekst yaratamiz
export const ThemeContext = createContext();

export const ThemeProviderWrapper = ({ children }) => {
  // 2. Mavzuni saqlash uchun state
  const [mode, setMode] = useState("dark");

  // 3. Mavzuni o'zgartirish funksiyasi
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  // 4. MUI Theme yaratish
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                primary: { main: "#90caf9" },
                background: { default: "#121212", paper: "#1e1e1e" },
                text: { primary: "#ffffff", secondary: "#b0bec5" },
              }
            : {
                primary: { main: "#1976d2" },
                background: { default: "#ffffff", paper: "#f5f5f5" },
                text: { primary: "#000000", secondary: "#424242" },
              }),
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
