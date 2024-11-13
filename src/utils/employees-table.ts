import { ColDef } from "ag-grid-community";
import { EmployeesRowData } from "../types/employees-table";
import FullScreenDialog from "../components/shared/contract-dialog";

export const employeesColDefs: ColDef<EmployeesRowData>[] = [
  { headerName: "ID", field: "id", checkboxSelection: true, flex: 1 },
  { headerName: "Start Work", field: "startWork", flex: 1 },
  { headerName: "User Name", field: "userName", flex: 1 },
  { headerName: "Total Hours", field: "totalHours", flex: 1 },
  { headerName: "Total Salary", field: "totalSalary", flex: 1 },
  {
    headerName: "Actions",
    field: "actions",
    cellRenderer: FullScreenDialog,
    flex: 1,
    minWidth: 120,
  },
];

export const employeesRowData: EmployeesRowData[] = [
  {
    totalSalary: 5000,
    startWork: "2024-18-3",
    userName: "Youssef_Sameh",
    totalHours: 2000,
    id: "1",
  },
  {
    totalSalary: 5000,
    startWork: "2024-18-3",
    totalHours: 2000,
    userName: "Youssef_Sameh",
    id: "2",
  },
  {
    totalSalary: 5000,
    startWork: "2024-18-3",
    totalHours: 2000,
    userName: "Youssef_Sameh",
    id: "3",
  },
  {
    totalSalary: 5000,
    startWork: "2024-18-3",
    totalHours: 2000,
    userName: "Youssef_Sameh",
    id: "4",
  },
];