import React, { useState } from "react";
import { FilterState } from "../../types";
import { FilterContainer, StyledFormControl } from "./FilterComponents";
import { MenuItem, Select, InputLabel, ToggleButton, ToggleButtonGroup, Box } from "@mui/material";

interface FilterProps {
  setActiveSection: (section: string) => void;
  setFilter: React.Dispatch<React.SetStateAction<FilterState>>;
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
      flexDirection={{ xs: "column", sm: "row" }} // Column on small screens, row on larger screens
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      gap={2} // Adds spacing between elements
      >
        {/* Task Sections - Toggle Buttons */}
        <ToggleButtonGroup
        value={selectedSection}
        exclusive
        onChange={handleSectionChange}
        aria-label="task sections"
        size="small"
        sx={{ width: { xs: "100%", sm: "100%" } }} // Full width on small screens
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
        sx={{ width: "100%" }} // Make it full-width in mobile view
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
        sx={{ width: "100%" }} // Make it full-width in mobile view
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


// import React from "react";
// import "./body.css";
// import "gridlex";

// const Filter = ({ setActiveSection, setFilter, darkMode }) => {
//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//   };

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilter((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div className={`${darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-black"} grid`}>
//         <div className="col-12 toolbar">
//             <div className="section-btns col-6">
//                 <button className="col-2" onClick={() => handleSectionChange("All Tasks")} style={{ padding: "8px 12px", marginRight: "5px" }}>All Tasks</button>
//                 <button className="col-2" onClick={() => handleSectionChange("Ongoing Tasks")} style={{ padding: "8px 12px", marginRight: "5px" }}>Ongoing Tasks</button>
//                 <button className="col-2" onClick={() => handleSectionChange("Completed Tasks")} style={{ padding: "8px 12px" }}>Completed Tasks</button>
//             </div>
//             <div className="col-6 section-tools" style={{ display: "flex" }}>
//                 <div className= "col-3 filter-tools">
//                     <label>Status</label>
//                     <select name="status" onChange={handleFilterChange} style={{ marginRight: "10px", padding: "6px" }}>
//                     <option value="">All</option>
//                     <option value="In Progress">In Progress</option>
//                     <option value="Completed">Completed</option>
//                     </select>
//                 </div>
//                 <div className="col-3 filter-tools">
//                     <label>Priority</label>
//                     <select name="priority" onChange={handleFilterChange} style={{ padding: "6px" }}>
//                     <option value="">All</option>
//                     <option value="Low">Low</option>
//                     <option value="Medium">Medium</option>
//                     <option value="High">High</option>
//                     <option value="Urgent">Urgent</option>
//                 </select>
//                 </div>
//             </div>
//         </div>
//     </div>    
//   );
// };

// export default Filter;

// import React from "react";

// const Filter = ({ setActiveSection, setFilter }) => {
//   const handleSectionChange = (section) => {
//     setActiveSection(section);
//   };

//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilter((prev) => ({ ...prev, [name]: value }));
//   };

//   return (
//     <div>
//       <button onClick={() => handleSectionChange("All Tasks")}>All Tasks</button>
//       <button onClick={() => handleSectionChange("Ongoing Tasks")}>Ongoing Tasks</button>
//       <button onClick={() => handleSectionChange("Completed Tasks")}>Completed Tasks</button>
      
//       <select name="status" onChange={handleFilterChange}>
//         <option value="">All</option>
//         <option value="In Progress">In Progress</option>
//         <option value="Completed">Completed</option>
//       </select>

//       <select name="priority" onChange={handleFilterChange}>
//         <option value="">All</option>
//         <option value="Low">Low</option>
//         <option value="Medium">Medium</option>
//         <option value="High">High</option>
//         <option value="Urgent">Urgent</option>
//       </select>
//     </div>
//   );
// };

// export default Filter;