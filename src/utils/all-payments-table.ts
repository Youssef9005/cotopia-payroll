import { ColDef } from "ag-grid-community";
import { AllPaymentsRowData } from "../types/all-payments";

export const allPaymentsColDefs: ColDef<AllPaymentsRowData>[] = [
  { headerName: "ID", field: "id", checkboxSelection: true },
  { headerName: "Date", field: "date" },
  { headerName: "User Name", field: "userName" },
  { headerName: "Total Hours", field: "totalHours" },
  { headerName: "Round", field: "round" },
  { headerName: "Bonus", field: "bonus" },
  { headerName: "Salary", field: "salary" },
  { headerName: "Status", field: "status" },
];

export const allPaymentsRowData: AllPaymentsRowData[] = [
  {
    bonus: 20,
    deb: 10,
    round: 1.5,
    salary: 200,
    date: "2024-18-3",
    totalHours: 50,
    status: "not yet",
    id: "1",
    userName: "Youssef_Sameh",
  },
  {
    bonus: 20,
    deb: 10,
    round: 1.5,
    salary: 400,
    date: "2024-18-3",
    totalHours: 50,
    status: "not yet",
    id: "2",
    userName: "Youssef_Sameh",
  },
  {
    bonus: 20,
    deb: 10,
    round: 1.5,
    salary: 400,
    date: "2024-18-3",
    totalHours: 50,
    status: "not yet",
    id: "3",
    userName: "Youssef_Sameh",
  },
  {
    bonus: 20,
    deb: 10,
    round: 1.5,
    salary: 400,
    date: "2024-18-3",
    totalHours: 50,
    status: "not yet",
    id: "3",
    userName: "Youssef_Sameh",
  },
];
