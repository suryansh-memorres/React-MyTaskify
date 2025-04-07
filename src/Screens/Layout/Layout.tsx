import React from "react";
import { Container, Box } from "@mui/material";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "background.default",
        color: "text.primary",
      }}
    >
      <Container disableGutters maxWidth={false}>{children}</Container>
    </Box>
  );
};

export default Layout;
