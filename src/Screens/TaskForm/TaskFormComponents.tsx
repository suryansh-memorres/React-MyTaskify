import { styled } from "@mui/material/styles";
import { Button, TextField, Box } from "@mui/material";

// Form Container
export const StyledFormContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(2),
  padding: theme.spacing(3),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  // maxWidth: 400,
  margin: "auto",
}));

// Styled TextField
export const StyledTextField = styled(TextField)(({ theme }) => ({
  // width: "100%",
}));

// Styled Button
export const StyledButton = styled(Button)(({ theme }) => ({
  padding: theme.spacing(1, 2),
  borderRadius: theme.shape.borderRadius,
  textTransform: "none",
}));


// import { styled } from "@mui/material/styles";
// import { Button, TextField, Box } from "@mui/material";

// // Styled input field
// export const StyledTextField = styled(TextField)({
//   width: "100%",
//   marginBottom: "16px",
// });

// // Styled button
// export const StyledButton = styled(Button)({
//   padding: "10px 16px",
//   borderRadius: "8px",
//   textTransform: "none",
// });

// // Form Container
// export const FormContainer = styled(Box)({
//   display: "flex",
//   flexDirection: "column",
//   gap: "16px",
//   padding: "16px",
//   backgroundColor: "#fff",
//   borderRadius: "8px",
//   boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
// });
