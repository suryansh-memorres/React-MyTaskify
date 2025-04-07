export interface Task {
    id: string;
    title: string;
    description?: string;
    priority: string;
    status: string;
    completed: boolean;
  }
  
  export interface FilterState {
    status: string;
    priority: string;
  }