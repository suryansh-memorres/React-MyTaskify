import { styled } from "@mui/material/styles";
import { Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { red } from "@mui/material/colors";

export const StyledTable = styled(Table)({
  width: "100%",
  borderCollapse: "collapse",
  padding: "0px",
  margin: "0px",
});

export const StyledTableHead = styled(TableHead)({
  backgroundColor: "#1976d2",
});

export const StyledTableRow = styled(TableRow)({
  borderBottom: "1px solid #ddd",
});

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: "10px",
  fontWeight: "bold",
  width: "fit-content",
  backgroundColor: theme.palette.mode === "dark" ? "#3a0a21" : "#fff1f9", // Dark mode contrast color
  // color: theme.palette.mode === "dark" ? "#fff" : "#000", // Ensure text contrast
}));

export const StyledTableBodyCell = styled(TableCell)({
  padding: "8px",
  // color: "black",
});

export const StyledButton = styled(Button)({
  margin: "0 5px",
  padding: "5px 10px",
  cursor: "pointer",
  textTransform: "none",
  "&:hover": {
    border: 1px solid red;
  }
});
