import { styled } from "@mui/material/styles";
import { Button, TextField, Box } from "@mui/material";

export const StyledFormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  margin: "auto",
}));

export const StyledTextField = styled(TextField)(({ theme }) => ({
  // width: "100%",
}));

export const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
}));
