import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of an employee
export interface Employee {
  id: string;
  name: string;
}

// Define the initial state type
export interface EmployeeState {
  employees: Employee[];
}

// Initial state
const initialState: EmployeeState = {
  employees: []
};

// Create the slice
export const employeeSlice = createSlice({
  name: 'employeeSlice',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<string>) => {
        // console.log(action)
      const newEmployee: Employee = {
        id: nanoid(),
        name: action.payload
      };
      console.log(newEmployee)
      state.employees.push(newEmployee);
    }
  }
});

// Export actions and reducer
export const { addEmployee } = employeeSlice.actions;
export default employeeSlice.reducer;
