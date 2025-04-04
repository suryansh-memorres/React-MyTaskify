import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Tooltip, Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const TaskList = ({ tasks, onTaskClick, onDelete }) => {
  return (
    <TableContainer component={Paper} sx={{ maxWidth: "100%", overflowX: "auto" , mt: 2}}>
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
              <TableCell align="left" sx={{overflow: "hidden", textOverflow: "ellipsis" }}>{task.description}</TableCell>
              <TableCell align="center">{task.priority}</TableCell>
              <TableCell align="center">{task.status}</TableCell>
              <TableCell align="center">
                <Tooltip title="Edit Task" arrow>
                  <Button variant="text" color="primary" onClick={() => onTaskClick(task.id)}>
                    <EditIcon />
                  </Button>
                </Tooltip>
                <Tooltip title="Delete Task" arrow>
                  <Button variant="text" onClick={() => onDelete(task.id)}>
                    <DeleteOutlineIcon />
                  </Button>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TaskList;


// import React from "react";
// import { 
//   StyledTable, 
//   StyledTableHead, 
//   StyledTableRow, 
//   StyledTableCell, 
//   StyledTableBodyCell, 
//   StyledButton ,
// } from "./TaskListStyles";
// import Tooltip from "@mui/material/Tooltip";
// import { TableBody, TableContainer, Paper, TableHead } from "@mui/material";
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import { Task } from "../../types";

// interface FilterState {
//   status: string;
//   priority: string;
// }

// interface TaskListProps {
//   tasks: Task[];
//   activeSection: string;
//   filter: FilterState;
//   onTaskClick: (taskId: string) => void;
//   onDelete: (taskId: string) => void;
// }

// const TaskList: React.FC<TaskListProps> = ({ tasks, activeSection, filter, onTaskClick, onDelete }) => {
  
//   const getFilteredTasks = (): Task[] => {
//     let filteredTasks = tasks;

//     if (filter.status) {
//       filteredTasks = filteredTasks.filter((task) => task.status === filter.status);
//     }
//     if (filter.priority) {
//       filteredTasks = filteredTasks.filter((task) => task.priority === filter.priority);
//     }
//     if (activeSection === "Completed Tasks") {
//       filteredTasks = filteredTasks.filter((task) => task.completed);
//     } else if (activeSection === "Ongoing Tasks") {
//       filteredTasks = filteredTasks.filter((task) => !task.completed);
//     }

//     return filteredTasks;
//   };

//   const filteredTasks = getFilteredTasks();

//   return (
//     <div>
//       <h2>{activeSection}</h2>
//       <TableContainer component={Paper} sx={{ overflowX: "auto" }}>
//       <StyledTable>
//         <StyledTableHead>
//           <StyledTableRow>
//             <StyledTableCell>Task Name</StyledTableCell>
//             <StyledTableCell>Description</StyledTableCell>
//             <StyledTableCell>Priority</StyledTableCell>
//             <StyledTableCell>Status</StyledTableCell>
//             <StyledTableCell sx={{ display: "flex", justifyContent: "center",}}>Actions</StyledTableCell>
//           </StyledTableRow>
//         </StyledTableHead>
//         <TableBody>
//           {filteredTasks.length > 0 ? (
//             filteredTasks.map((task) => (
//               <StyledTableRow key={task.id}>
//                 <StyledTableBodyCell>{task.title}</StyledTableBodyCell>
//                 <StyledTableBodyCell>{task.description}</StyledTableBodyCell>
//                 <StyledTableBodyCell>{task.priority}</StyledTableBodyCell>
//                 <StyledTableBodyCell>{task.status}</StyledTableBodyCell>
//                 <StyledTableBodyCell sx={{ display: "flex", justifyContent: "flex-end",}}>
//                 <Tooltip title="Edit Task" arrow>
//                   <StyledButton variant="text" color="primary" onClick={() => onTaskClick(task.id)}>
//                     <EditIcon />
//                   </StyledButton>
//                 </Tooltip>

//                 <Tooltip title="Delete Task" arrow>
//                   <StyledButton variant="text" color="secondary" onClick={() => onDelete(task.id)}>
//                     <DeleteOutlineIcon />
//                   </StyledButton>
//                 </Tooltip>
//               </StyledTableBodyCell>
//               </StyledTableRow>
//             ))
//           ) : (
//             <StyledTableRow>
//               <StyledTableBodyCell colSpan={5} align="center">
//                 No tasks available.
//               </StyledTableBodyCell>
//             </StyledTableRow>
//           )}
//         </TableBody>
//       </StyledTable>
//       </TableContainer>
//     </div>
//   );
// };

// export default TaskList;


// import React from "react";

// const TaskList = ({ tasks, activeSection, filter, onTaskClick, onDelete }) => {
//   console.log("Tasks received:", tasks);
//   console.log("Active Section:", activeSection);
//   console.log("Filter:", filter);

//   const getFilteredTasks = () => {
//     let filteredTasks = tasks;

//     if (filter.status) {
//       filteredTasks = filteredTasks.filter((task) => task.status === filter.status);
//     }
//     if (filter.priority) {
//       filteredTasks = filteredTasks.filter((task) => task.priority === filter.priority);
//     }
//     if (activeSection === "Completed Tasks") {
//       filteredTasks = filteredTasks.filter((task) => task.completed);
//     } else if (activeSection === "Ongoing Tasks") {
//       filteredTasks = filteredTasks.filter((task) => !task.completed);
//     }

//     console.log("Filtered Tasks:", filteredTasks);
//     return filteredTasks;
//   };

//   const filteredTasks = getFilteredTasks();

//   return (
//     <div>
//       <h2>{activeSection}</h2>
//       <table>
//         <thead>
//           <tr>
//             <th>Task Name</th>
//             <th>Description</th>
//             <th>Priority</th>
//             <th>Status</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredTasks.length > 0 ? (
//             filteredTasks.map((task) => (
//               <tr key={task.id}>
//                 <td>{task.name}</td>
//                 <td>{task.description}</td>
//                 <td>{task.priority}</td>
//                 <td>{task.status}</td>
//                 <td>
//                   <button onClick={() => onTaskClick(task.id)}>Edit</button>
//                   <button onClick={() => onDelete(task.id)}>Delete</button>
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5" align="center">
//                 No tasks available.
//               </td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default TaskList;


// import React from "react";
// import "./body.css";
// import "gridlex";

// const TaskList = ({ tasks, activeSection, filter, onTaskClick, onDelete, darkMode }) => {
//   console.log("Tasks received:", tasks);
//   console.log("Active Section:", activeSection);
//   console.log("Filter:", filter);

//   const getFilteredTasks = () => {
//     let filteredTasks = tasks;

//     // Filter by status
//     if (filter.status) {
//       filteredTasks = filteredTasks.filter((task) => task.status === filter.status);
//     }

//     // Filter by priority
//     if (filter.priority) {
//       filteredTasks = filteredTasks.filter((task) => task.priority === filter.priority);
//     }

//     // Section-based filtering
//     if (activeSection === "Completed Tasks") {
//       filteredTasks = filteredTasks.filter((task) => task.completed);
//     } else if (activeSection === "Ongoing Tasks") {
//       filteredTasks = filteredTasks.filter((task) => !task.completed);
//     }

//     console.log("Filtered Tasks:", filteredTasks);
//     return filteredTasks;
//   };

//   const filteredTasks = getFilteredTasks();

//   return (
//     <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
//       <h2 className="text-lg font-bold mb-2">{activeSection}</h2>
//       <div className="table-container">
//         <table className="table-alignment p-4 w-full table-fixed border-collapse border border-gray-400">
//           <thead className="w-full">
//             <tr className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}`}>
//               <th className="border border-gray-400 p-2">Task Name</th>
//               <th className="border border-gray-400 p-2">Description</th>
//               <th className="border border-gray-400 p-2">Priority</th>
//               <th className="border border-gray-400 p-2">Status</th>
//               <th className="border border-gray-400 p-2 table-tools">Actions</th>
//             </tr>
//           </thead>
//           <tbody className="w-full right-pad">
//             {filteredTasks.length > 0 ? (
//               filteredTasks.map((task) => (
//                 <tr key={task.id} className="border border-gray-400">
//                   <td className="border border-gray-400 p-2">{task.name}</td>
//                   <td className="border border-gray-400 p-2">{task.description}</td>
//                   <td className="border border-gray-400 p-2">{task.priority}</td>
//                   <td className="border border-gray-400 p-2">{task.status}</td>
//                   <td className="border border-gray-400 p-2">
//                     <div className="tab-actions">
//                       <button
//                         onClick={() => onTaskClick(task.id)}
//                         className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
//                       >
//                         Edit
//                       </button>
//                       <button
//                         onClick={() => onDelete(task.id)}
//                         className="bg-red-500 text-white px-2 py-1 rounded cancellation-action"
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center p-2">
//                   No tasks available.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskList;


// // // components/TaskList.js
// // import React from "react";
// // import "./body.css";
// // import "gridlex";

// // const TaskList = ({ tasks, activeSection, filter, onTaskClick, onDelete, darkMode }) => {
// //   console.log("Tasks received:", tasks);
// //   console.log("Active Section:", activeSection);
// //   console.log("Filter:", filter);

// //   const getFilteredTasks = () => {
// //     let filteredTasks = tasks;

// //     // Filter by status
// //     if (filter.status) {
// //       filteredTasks = filteredTasks.filter((task) => task.status === filter.status);
// //     }

// //     // Filter by priority
// //     if (filter.priority) {
// //       filteredTasks = filteredTasks.filter((task) => task.priority === filter.priority);
// //     }

// //     // Section-based filtering
// //     if (activeSection === "Completed Tasks") {
// //       filteredTasks = filteredTasks.filter((task) => task.completed);
// //     } else if (activeSection === "Ongoing Tasks") {
// //       filteredTasks = filteredTasks.filter((task) => !task.completed);
// //     }

// //     console.log("Filtered Tasks:", filteredTasks);
// //     return filteredTasks;
// //   };

// //   const filteredTasks = getFilteredTasks();

// //   return (
// //         <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`} >
// //             <h2 className="text-lg font-bold mb-2">{activeSection}</h2>
// //             <div>
// //                 <table className="table-w-100 table-alignment p-4 w-full table-fixed border-collapse border border-gray-400">
// //                     <thead className="w-full">
// //                         <tr className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"}`}>
// //                             <th className="border border-gray-400 p-2">Task Name</th>
// //                             <th className="border border-gray-400 p-2">Description</th>
// //                             <th className="border border-gray-400 p-2">Priority</th>
// //                             <th className="border border-gray-400 p-2">Status</th>
// //                             <th className="border border-gray-400 p-2 table-tools">Actions</th>
// //                         </tr>
// //                     </thead>
// //                     <tbody className="w-full right-pad"> {filteredTasks.length > 0 ? ( filteredTasks.map((task) => (
// //                         <tr key={task.id} className="border border-gray-400">
// //                             <td className="border border-gray-400 p-2">{task.name}</td>
// //                             <td className="border border-gray-400 p-2">{task.description}</td>
// //                             <td className="border border-gray-400 p-2">{task.priority}</td>
// //                             <td className="border border-gray-400 p-2">{task.status}</td>
// //                             <td className="border border-gray-400 p-2">
// //                             <div className="tab-actions">
// //                                 <button onClick={() => onTaskClick(task.id)} className="bg-blue-500 text-white px-2 py-1 rounded mr-2">
// //                                     Edit
// //                                 </button>
// //                                 <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-2 py-1 rounded">
// //                                     Delete
// //                                 </button>
// //                             </div>    
// //                             </td>
// //                         </tr>
// //                         ))
// //                     ) : (
// //                         <tr>
// //                         <td colSpan="5" className="text-center p-2">No tasks available.</td>
// //                         </tr>
// //                     )}
// //                     </tbody>
// //                 </table>
// //             </div>
// //         </div>
// //   );
// // };

// // export default TaskList;
