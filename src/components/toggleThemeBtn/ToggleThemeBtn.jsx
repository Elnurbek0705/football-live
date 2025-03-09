import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

const ToggleThemeBtn = () => {
   const { mode, toggleTheme } = useContext(ThemeContext);

   return (
     <IconButton onClick={toggleTheme} color="inherit">
       {mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
     </IconButton>
   ); 
}

export default ToggleThemeBtn
