import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { ThemeProvider, CssBaseline, createTheme, Box, Button, Container } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import Layout from "./Screens/Layout/Layout";
import Header from "./Screens/Header/Header";
import Filter from "./Screens/FilterToolbar/Filter";
import TaskForm from "./Screens/TaskForm/TaskForm";
import TaskList from "./Screens/TaskList/TaskList";
import AddTaskIcon from '@mui/icons-material/AddTask';
import { Task, FilterState } from "./types";
import '@fontsource/poppins';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [filter, setFilter] = useState<FilterState>({ status: "", priority: "" });
  const [activeSection, setActiveSection] = useState<string>("All Tasks");
  const [taskBeingEdited, setTaskBeingEdited] = useState<Task | null>(null);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
    setDarkMode(JSON.parse(localStorage.getItem("darkMode") || "true"));
  }, []);

  // useEffect(() => {
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }, [tasks]);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);
  
  
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
    },
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: { main: "#53969D" },
      // primary: { main: "#c75498" },
      secondary: { main: "#dc004e`" },
      background: {
        default: darkMode ? "#282C35" : "#FFFFFF",
      },
    },
  });

  const addOrUpdateTask = (task: Task) => {
  
    if (!task.id) {
      task.id = uuidv4();
    }
  
    setTasks((prevTasks) => {
      const updatedTasks = prevTasks.some((t) => t.id === task.id)
        ? prevTasks.map((t) => (t.id === task.id ? task : t))
        : [...prevTasks, task];
  
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  
    setShowForm(false);
    setTaskBeingEdited(null);
  };

  const getFilteredTasks = () => {
    return tasks.filter((task) => {
      // const statusMatch =
      //   filter.status === "" || task.status === filter.status;
  
      const priorityMatch =
        filter.priority === "" || task.priority === filter.priority;
  
      const sectionMatch =
        activeSection === "All Tasks" ||
        (activeSection === "Ongoing Tasks" && task.status !== "Completed") ||
        (activeSection === "Completed Tasks" && task.status === "Completed");
  
      // return statusMatch && priorityMatch && sectionMatch;
      return priorityMatch && sectionMatch;
    });
  };
  
  // const handleDeleteTask = (taskId: string) => {
  //   setTasks((prevTasks) => {
  //     const updatedTasks = prevTasks.filter((task) => task.id !== taskId);
  //     localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  //     return updatedTasks;
  //   });
  // };
  

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
        <Filter setActiveSection={setActiveSection} setFilter={setFilter} darkMode={darkMode} />

        {/* New Task Button */}
        <Container disableGutters maxWidth={false}>
          <Box display="flex" justifyContent="end" pr={2}>
          <Tooltip title="Add New Task" arrow>
            <Button
            variant="contained"
            color="primary"
            sx={{marginTop: "16px"}}
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