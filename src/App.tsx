import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider, CssBaseline, createTheme, Box, Button, Container } from "@mui/material";
import Layout from "./Screens/Layout/Layout";
import Header from "./Screens/Header/Header";
import Filter from "./Screens/FilterToolbar/Filter";
import TaskForm from "./Screens/TaskForm/TaskForm";
import TaskList from "./Screens/TaskList/TaskList";
import AddTaskIcon from '@mui/icons-material/AddTask';
import Tooltip from "@mui/material/Tooltip";
import { Task, FilterState } from "./types";

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [filter, setFilter] = useState<FilterState>({ status: "", priority: "" });
  const [activeSection, setActiveSection] = useState<string>("All Tasks");
  const [taskBeingEdited, setTaskBeingEdited] = useState<Task | null>(null);

  // Load from localStorage
  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
    setDarkMode(JSON.parse(localStorage.getItem("darkMode") || "true"));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  useEffect(() => {
    if (tasks.length > 0) { // Prevent saving an empty array on first render
      console.log("Saving tasks to localStorage:", tasks);
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);
  
  
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#c75498" },
      secondary: { main: "#`dc004e`" },
      background: {
        default: darkMode ? "#282C35" : "#FFFFFF",  // Coffee brown instead of black
      },
    },
  });

  const addOrUpdateTask = (task: Task) => {
    console.log("Received task:", task);
  
    if (!task.id) {
      task.id = uuidv4(); // Assign a unique ID if it's a new task
    }
  
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.some((t) => t.id === task.id)
        ? prevTasks.map((t) => (t.id === task.id ? task : t))
        : [...prevTasks, task];
  
      console.log("Updated tasks array:", updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save immediately
      return updatedTasks;
    });
  
    setShowForm(false);
    setTaskBeingEdited(null);
  };

  const getFilteredTasks = () => {
    return tasks.filter((task) => {
      const statusMatch =
        filter.status === "" || task.status === filter.status;
  
      const priorityMatch =
        filter.priority === "" || task.priority === filter.priority;
  
      const sectionMatch =
        activeSection === "All Tasks" ||
        (activeSection === "Ongoing Tasks" && task.status !== "Completed") ||
        (activeSection === "Completed Tasks" && task.status === "Completed");
  
      return statusMatch && priorityMatch && sectionMatch;
    });
  };
  
  const handleDeleteTask = (taskId: string) => {
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks)); // Save immediately
      return updatedTasks;
    });
  };
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Filter setActiveSection={setActiveSection} setFilter={setFilter} darkMode={darkMode} />

        {/* New Task Button using MUI */}
        <Container disableGutters maxWidth={false}>
          <Box display="flex" justifyContent="end" pr={2} /*my={2}*/>
          <Tooltip title="Add New Task" arrow>
            <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setTaskBeingEdited(null);
              setShowForm(true);
            }}
          >
          <AddTaskIcon />
          </Button>
          </Tooltip>
          </Box>
        </Container>

        {/* Form & Task List Section */}
        <Container disableGutters maxWidth={false}>
          {showForm && (
            <TaskForm
              task={taskBeingEdited}
              onSubmit={addOrUpdateTask}
              onClose={() => setShowForm(false)}
              darkMode={darkMode}
            />
          )}
          <Container disableGutters maxWidth={false}>
            <Box px={2}>
            <TaskList
            tasks={getFilteredTasks()}
            activeSection={activeSection}
            filter={filter}
            onTaskClick={(taskId) => {
              setTaskBeingEdited(tasks.find((t) => t.id === taskId) || null);
              setShowForm(true);
            }}
            onDelete={(taskId) => setTasks(tasks.filter((task) => task.id !== taskId))}
            darkMode={darkMode}
          />
            </Box>
          </Container>
        </Container>
      </Layout>
    </ThemeProvider>
  );
};

export default App;

// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App