import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { ThemeToggleButton } from "./UIHeaderComponent";

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    // <AppBar position="static" color="primary" sx={{ backgroundColor: darkMode ? '#9a3e80' : 'primary.main'}} >
      <AppBar position="static" color="primary" sx={{ backgroundColor: darkMode ? '#53969D' : 'primary.main'}} >
      <Toolbar style={{ display: "flex", justifyContent: "space-between", padding: "0px 16px" }}>
        <Typography variant="h6" component="h1">
          Taskify - Your one stop Task Manager
        </Typography>
        <Box>
            <ThemeToggleButton variant="text" darkMode={darkMode} onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? <LightMode /> : <DarkMode />}
            </ThemeToggleButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
// #9a3e75