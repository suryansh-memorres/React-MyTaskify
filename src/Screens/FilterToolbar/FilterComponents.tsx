import { styled } from "@mui/material/styles";
import { Button, FormControl, Box, ToggleButton, Container } from "@mui/material";

// Container styling
export const FilterContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  justifyContent: "space-between",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.background.paper,
}));

// Styled button for section switching
export const StyledButton = styled(Button)({
  padding: "8px 12px",
  textTransform: "none",
});

// Styled form controls for dropdowns
export const StyledFormControl = styled(FormControl)({
  minWidth: 150,
});
