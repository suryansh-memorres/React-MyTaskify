import React, { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface TaskListProps {
  tasks: Task[];
  onTaskClick: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

const TaskList = ({ tasks, onTaskClick, onDelete }) => {
  const [open, setOpen] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  const handleDeleteClick = (taskId) => {
    setSelectedTaskId(taskId);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTaskId(null);
  };

  const handleConfirmDelete = () => {
    if (selectedTaskId) {
      onDelete(selectedTaskId);
    }
    handleClose();
  };

  return (
    <>
      <TableContainer component={Paper} sx={{ maxWidth: "100%", overflowX: "auto", mt: 2 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: (theme) => theme.palette.mode === "dark" ? "#3a0a21" : "#fff1f9" }}>
              <TableCell align="left" sx={{ width: "10%" }}>Title</TableCell>
              <TableCell align="left" sx={{ width: "60%" }}>Description</TableCell>
              <TableCell align="center" sx={{ width: "10%" }}>Priority</TableCell>
              <TableCell align="center" sx={{ width: "10%" }}>Status</TableCell>
              <TableCell align="center" sx={{ width: "10%" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tasks.map((task) => (
              <TableRow key={task.id}>
                <TableCell align="left">{task.title}</TableCell>
                <TableCell align="left" sx={{ overflow: "hidden", textOverflow: "ellipsis" }}>{task.description}</TableCell>
                <TableCell align="center">{task.priority}</TableCell>
                <TableCell align="center">{task.status}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit Task" arrow>
                    <Button variant="text" color="primary" onClick={() => onTaskClick(task.id)}>
                      <EditIcon />
                    </Button>
                  </Tooltip>
                  <Tooltip title="Delete Task" arrow>
                    <Button variant="text" onClick={() => handleDeleteClick(task.id)}>
                      <DeleteOutlineIcon />
                    </Button>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>Are you sure you want to delete this task?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary">Cancel</Button>
          <Button onClick={handleConfirmDelete} variant="contained" color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskList;