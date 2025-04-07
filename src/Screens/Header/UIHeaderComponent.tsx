import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

interface ToggleButtonProps {
  darkMode: boolean;
}

export const ThemeToggleButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "darkMode",
})<ToggleButtonProps>(({ darkMode }) => ({
  backgroundColor: darkMode ? "#f5f5f5" : "#333",
  // backgroundColor: darkMode ? "#f5f5f5" : "#333",#c75498
  color: darkMode ? "#333" : "#fff",
  "&:hover": {
    backgroundColor: darkMode ? "#e0e0e0" : "#555",
  },
  // padding: "8px 16px",
  borderRadius: "8px",
  transition: "all 0.3s ease-in-out",
}));