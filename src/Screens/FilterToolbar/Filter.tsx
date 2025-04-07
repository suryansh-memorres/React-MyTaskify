import React, { useState } from "react";
import { FilterState } from "../../types";
import { FilterContainer, StyledFormControl } from "./FilterComponents";
import { MenuItem, Select, InputLabel, ToggleButton, ToggleButtonGroup, Box } from "@mui/material";

interface FilterProps {
  setActiveSection: (section: string) => void;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
  darkMode: boolean;
}

const Filter: React.FC<FilterProps> = ({ setActiveSection, setFilter }) => {
  const [selectedSection, setSelectedSection] = useState<string>("All Tasks");

  const handleSectionChange = (_event: React.MouseEvent<HTMLElement>, newSection: string | null) => {
    if (newSection !== null) {
      setSelectedSection(newSection);
      setActiveSection(newSection);
    }
  };

  const handleFilterChange = (e: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    if (e.target.name) {
      setFilter((prev) => ({ ...prev, [e.target.name]: e.target.value as string }));
    }
  };

  return (
    <FilterContainer disableGutters maxWidth={false}>
      <Box
      display="flex"
      flexDirection={{ xs: "column", sm: "row" }}
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      gap={2}
      >
        <ToggleButtonGroup
        value={selectedSection}
        exclusive
        onChange={handleSectionChange}
        aria-label="task sections"
        size="small"
        sx={{ width: { xs: "100%"} }}
        >
          <ToggleButton value="All Tasks" sx={{ width: "100%"}}>All Tasks</ToggleButton>
          <ToggleButton value="Ongoing Tasks" sx={{ width: "100%" }}>Ongoing</ToggleButton>
          <ToggleButton value="Completed Tasks" sx={{ width: "100%" }}>Completed</ToggleButton>
          </ToggleButtonGroup>
          
          {/* Status & Priority Styled Buttons */}
          <Box 
          display="flex" 
          flexDirection={{ xs: "column", sm: "row"}}
          justifyContent="end" 
          gap={2} 
          width="100%"
          >
           {/* <StyledFormControl sx={{ width: { xs: "100%", sm: "auto" } }}>
      <InputLabel>Status</InputLabel>
      <Select 
        variant="standard" 
        name="status" 
        onChange={handleFilterChange} 
        defaultValue="" 
        size="small"
        sx={{ width: "100%" }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="In Progress">In Progress</MenuItem>
        <MenuItem value="Completed">Completed</MenuItem>
      </Select>
    </StyledFormControl> */}

    <StyledFormControl sx={{ width: { xs: "100%", sm: "auto" } }}>
      <InputLabel>Priority</InputLabel>
      <Select 
        variant="standard" 
        name="priority" 
        onChange={handleFilterChange} 
        defaultValue="" 
        size="small"
        sx={{ width: "100%" }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="High">High</MenuItem>
        <MenuItem value="Medium">Medium</MenuItem>
        <MenuItem value="Low">Low</MenuItem>
      </Select>
    </StyledFormControl>
  </Box>
</Box>


    </FilterContainer>
  );  
};

export default Filter;