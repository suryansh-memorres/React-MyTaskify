import React, { useState } from "react";
import { Task } from "../../types";
import { StyledFormContainer, StyledTextField, StyledButton } from "./TaskFormComponents";
import { MenuItem, Box } from "@mui/material";

interface TaskFormProps {
  task: Task | null;
  onSubmit: (task: Task) => void;
  onClose: () => void;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const newTask: Task = {
      ...formData,
      id: formData.id || crypto.randomUUID(), // Ensure an ID exists
    };
    
  
    // Update localStorage
    const existingTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    const updatedTasks = task
      ? existingTasks.map((t: Task) => (t.id === task.id ? newTask : t))
      : [...existingTasks, newTask];
  
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  
    onSubmit(newTask);
  };
  

  return (
    <StyledFormContainer as="form" onSubmit={handleSubmit}>
      <StyledTextField label="Task Name" name="title" value={formData.title} onChange={handleChange} required />
      <StyledTextField label="Task Description" name="description" value={formData.description} onChange={handleChange} multiline rows={3} />

      <StyledTextField select label="Status" name="status" value={formData.status} onChange={handleChange}>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Completed">Completed</MenuItem>
        {/* <MenuItem value="Pending">Pending</MenuItem> */}
      </StyledTextField>

      <StyledTextField select label="Priority" name="priority" value={formData.priority} onChange={handleChange}>
        <MenuItem value="Low">Low</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="High">High</MenuItem>
      </StyledTextField>

      {/* <StyledTextField label="Start Date" type="date" name="startDate" value={formData.startDate} onChange={handleChange} InputLabelProps={{ shrink: true }} />
      <StyledTextField label="End Date" type="date" name="endDate" value={formData.endDate} onChange={handleChange} InputLabelProps={{ shrink: true }} /> */}

      <Box display="flex" justifyContent="space-between">
        <StyledButton onClick={onClose} variant="contained">Cancel</StyledButton>
        <StyledButton type="submit" variant="contained">Save Task</StyledButton>
      </Box>
    </StyledFormContainer>
  );
};

export default TaskForm;


// import React, { useState } from "react";
// import { Task } from "../../types";

// interface TaskFormProps {
//   task: Task | null;
//   onSubmit: (task: Task) => void;
//   onClose: () => void;
//   darkMode: boolean;
// }

// const TaskForm: React.FC<TaskFormProps> = ({ task, onSubmit, onClose, darkMode }) => {
//   const [formData, setFormData] = useState<Task>(
//     task || { id: "", title: "", description: "", priority: "Low", status: "In Progress", completed: false }
//   );

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit({ ...formData, id: task?.id || crypto.randomUUID() });
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="title" value={formData.title} onChange={handleChange} required />
//       <select name="priority" value={formData.priority} onChange={handleChange}>
//         <option value="Low">Low</option>
//         <option value="Medium">Medium</option>
//         <option value="High">High</option>
//       </select>
//       <button type="submit">Save Task</button>
//       <button onClick={onClose}>Cancel</button>
//     </form>
//   );
// };

// export default TaskForm;


// import React, { useState } from "react";

// interface Task {
//   id?: number;
//   name: string;
//   description: string;
//   priority: "Low" | "Medium" | "High" | "Urgent";
//   startDate: string;
//   endDate: string;
//   completed: boolean;
// }

// interface TaskFormProps {
//   task?: Task;
//   onSubmit: (task: Task) => void;
//   onClose: () => void;
// }

// const TaskForm: React.FC<TaskFormProps> = ({ task, onSubmit, onClose }) => {
//   const [formData, setFormData] = useState<Task>(
//     task || {
//       name: "",
//       description: "",
//       priority: "Low",
//       startDate: "",
//       endDate: "",
//       completed: false,
//     }
//   );

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Task Name:
//           <input type="text" name="name" value={formData.name} onChange={handleChange} required />
//         </label>
//         <label>
//           Priority:
//           <select name="priority" value={formData.priority} onChange={handleChange}>
//             <option value="Low">Low</option>
//             <option value="Medium">Medium</option>
//             <option value="High">High</option>
//             <option value="Urgent">Urgent</option>
//           </select>
//         </label>
//         <label>
//           Completed:
//           <input type="checkbox" name="completed" checked={formData.completed} onChange={handleChange} />
//         </label>
//         <label>
//           Start Date:
//           <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
//         </label>
//         <label>
//           End Date:
//           <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
//         </label>
//         <label>
//           Description:
//           <textarea name="description" value={formData.description} onChange={handleChange} required rows={2} />
//         </label>
//         <button type="button" onClick={onClose}>Cancel</button>
//         <button type="submit">{task?.id ? "Update Task" : "Add Task"}</button>
//       </form>
//     </div>
//   );
// };

// export default TaskForm;


// components/TaskForm.js
// import React, { useState } from "react";
// import "./body.css";

// const TaskForm = ({ task, onSubmit, onClose, darkMode }) => {
//   const [formData, setFormData] = useState(task || {
//     name: "",
//     description: "",
//     priority: "Low",
//     startDate: "",
//     endDate: "",
//     status: "In Progress",
//     completed: false,
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);
//   };

//   return (
//     <div className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"} form-section`}>
//       <form onSubmit={handleSubmit} className="div-form" >
//         <div className="grid form-division">
//             <div className="col-6_sm-12 left-form-sect">
//                 <label className="input-section">
//                 Task Name:
//                 <input className="input-field" type="text" name="name" value={formData.name} onChange={handleChange} required />
//                 </label>
//                 <div className="grid form-tools">
//                     <label className="col-6_sm-12 input-section">
//                     Priority:
//                     <select  className="input-field" name="priority" value={formData.priority} onChange={handleChange}>
//                         <option value="Low">Low</option>
//                         <option value="Medium">Medium</option>
//                         <option value="High">High</option>
//                         <option value="Urgent">Urgent</option>
//                     </select>
//                     </label>
//                     <label className="col-6_sm-12 input-section">
//                     Status:
//                     <select className="input-field" name="status" value={formData.status} onChange={handleChange}>
//                         <option value="In Progress">In Progress</option>
//                         <option value="Completed">Completed</option>
//                     </select>
//                     </label>
//                 </div>
//                 <div className="grid date-inputs">
//                     <label className="col-6_sm-12 input-section">
//                     Start Date:
//                     <input className="input-field" type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
//                     </label>
//                     <label className="col-6_sm-12 input-section">
//                     End Date:
//                     <input className="input-field" type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
//                     </label>
//                     <label className="col-12_sm-12 input-section check-mark">
//                     <input className="input-field" type="checkbox" name="completed" checked={formData.completed} onChange={handleChange} /> Mark as Completed
//                     </label>
//                 </div>
//             </div>
//             <div className="col-6_sm-12 right-form-sect">
//                 <label className="input-section">
//                 Description:
//                 <textarea className="sm-12 input-field description" name="description" value={formData.description} onChange={handleChange} required rows="2" />
//                 </label>
//             </div>
//         </div>
//         <div className="grid form-actions">
//             <button className="sm-6 cancellation-action" type="button" onClick={onClose}>Cancel</button>
//             <button className="sm-6" type="submit">{task?.id ? "Update Task" : "Add Task"}</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default TaskForm;
