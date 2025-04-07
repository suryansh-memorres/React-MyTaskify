import React, { useState } from "react";
import { Task } from "../../types";
import { StyledFormContainer, StyledTextField, StyledButton } from "./TaskFormComponents";
import { MenuItem, Box, Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";

interface TaskFormProps {
  task: Task | null;
  onSubmit: (task: Task) => void;
  onClose: () => void;
  darkMode: boolean;
}

const TaskForm: React.FC<TaskFormProps> = ({ task, onSubmit, onClose }) => {
  const [formData, setFormData] = useState<Task>(
    task || {
      id: "",
      title: "",
      description: "",
      priority: "Low",
      status: "In Progress",
      completed: false,
    }
  );

  const [confirmOpen, setConfirmOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSaveClick = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmOpen(true);
  };

  const handleConfirmSubmit = () => {
    const newTask: Task = {
      ...formData,
      id: formData.id || crypto.randomUUID(),
    };

    // Update localStorage
    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = task
      ? existingTasks.map((t: Task) => (t.id === task.id ? newTask : t))
      : [...existingTasks, newTask];

    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    onSubmit(newTask);
    setConfirmOpen(false);
    onClose();
  };

  return (
    <>
      <StyledFormContainer as="form" onSubmit={handleSaveClick}>
        <StyledTextField label="Task Name" name="title" value={formData.title} onChange={handleChange} required />
        <StyledTextField label="Task Description" name="description" value={formData.description} onChange={handleChange} multiline rows={3} />

        <StyledTextField select label="Status" name="status" value={formData.status} onChange={handleChange}>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </StyledTextField>

        <StyledTextField select label="Priority" name="priority" value={formData.priority} onChange={handleChange}>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </StyledTextField>

        <Box display="flex" justifyContent="space-between">
          <StyledButton onClick={onClose} variant="contained" color="error">Cancel</StyledButton>
          <StyledButton type="submit" variant="contained">Save Task</StyledButton>
        </Box>
      </StyledFormContainer>

      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>Confirm Task Creation</DialogTitle>
        <DialogContent>Are you sure you want to save this task?</DialogContent>
        <DialogActions>
          <StyledButton onClick={() => setConfirmOpen(false)} variant="contained" color="error">Cancel</StyledButton>
          <StyledButton onClick={handleConfirmSubmit} variant="contained">Confirm</StyledButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TaskForm;


//old code
// import React, { useState } from "react";
// import { Task } from "../../types";
// import { StyledFormContainer, StyledTextField, StyledButton } from "./TaskFormComponents";
// import { MenuItem, Box } from "@mui/material";

// interface TaskFormProps {
//   task: Task | null;
//   onSubmit: (task: Task) => void;
//   onClose: () => void;
// }

// const TaskForm: React.FC<TaskFormProps> = ({ task, onSubmit, onClose }) => {
//   const [formData, setFormData] = useState<Task>(
//     task || {
//       id: "",
//       title: "",
//       description: "",
//       priority: "Low",
//       status: "In Progress",
//       completed: false,
//     }
//   );

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };
  

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
  
//     const newTask: Task = {
//       ...formData,
//       id: formData.id || crypto.randomUUID(), // Ensure an ID exists
//     };
    
  
//     // Update localStorage
//     const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
//     const updatedTasks = task
//       ? existingTasks.map((t: Task) => (t.id === task.id ? newTask : t))
//       : [...existingTasks, newTask];
  
//     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  
//     onSubmit(newTask);
//   };

//   return (
//     <StyledFormContainer as="form" onSubmit={handleSubmit}>
//       <StyledTextField label="Task Name" name="title" value={formData.title} onChange={handleChange} required />
//       <StyledTextField label="Task Description" name="description" value={formData.description} onChange={handleChange} multiline rows={3} />

//       <StyledTextField select label="Status" name="status" value={formData.status} onChange={handleChange}>
//         <MenuItem value="In Progress">In Progress</MenuItem>
//         <MenuItem value="Completed">Completed</MenuItem>
//         {/* <MenuItem value="Pending">Pending</MenuItem> */}
//       </StyledTextField>

//       <StyledTextField select label="Priority" name="priority" value={formData.priority} onChange={handleChange}>
//         <MenuItem value="Low">Low</MenuItem>
//         <MenuItem value="Medium">Medium</MenuItem>
//         <MenuItem value="High">High</MenuItem>
//       </StyledTextField>

//       <Box display="flex" justifyContent="space-between">
//         <StyledButton onClick={onClose} variant="contained" color="error">Cancel</StyledButton>
//         <StyledButton type="submit" variant="contained">Save Task</StyledButton>
//       </Box>
//     </StyledFormContainer>
//   );
// };

// export default TaskForm;