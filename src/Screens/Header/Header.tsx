import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { LightMode, DarkMode } from "@mui/icons-material";
import { ThemeToggleButton } from "./UIHeaderComponent"; // Renamed ToggleButton

interface HeaderProps {
  darkMode: boolean;
  setDarkMode: (mode: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  return (
    <AppBar position="static" color="primary" sx={{ backgroundColor: darkMode ? '#9a3e80' : 'primary.main'}} >
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" component="h1">
          Task Manager
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


// //Header.js

// import React from "react";
// import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
// import { Brightness4, Brightness7 } from "@mui/icons-material";
// import "gridlex";
// import "./body.css";

// const Header = ({ darkMode, setDarkMode }) => {
//   return (
//     <AppBar position="static" color={darkMode ? "default" : "primary"}>
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Task Manager
//         </Typography>
//         <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
//           {darkMode ? <Brightness7 /> : <Brightness4 />}
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Header;


// import React from "react";
// import "gridlex";
// import "./body.css";  // Import the CSS file

// const Header = ({ darkMode, setDarkMode }) => {
//   return (
//     <header className="grid header-nav">
//       <h1 className="col-6_sm-12">Task Manager</h1>
//       <div className="col-6_sm-12 theme-toggle">
//       <button className="toggle-mode-btn" onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? "🌞 Mode" : "🌚 Mode"}
//       </button>
//       </div>
//     </header>
//   );
// };

// export default Header;
