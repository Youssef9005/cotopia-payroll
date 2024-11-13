import { ColDef } from "ag-grid-community";
import { PaymentsRowData } from "../types/payment-table";

export const paymentsColDefs: ColDef<PaymentsRowData>[] = [
  { headerName: "ID", field: "id", checkboxSelection: true },
  { headerName: "Date", field: "date" },
  { headerName: "Total Hours", field: "totalHours" },
  { headerName: "Round", field: "round" },
  { headerName: "Bonus", field: "bonus" },
  { headerName: "Salary", field: "salary" },
  { headerName: "Status", field: "status" },
];

export const paymentsRowData: PaymentsRowData[] = [
  {
    bonus: 20,
    deb: 10,
    round: 1.5,
    salary: 200,
    date: "2024-18-3",
    totalHours: 50,
    status: "not yet",
    id: "1",
  },
  {
    bonus: 20,
    deb: 10,
    round: 1.5,
    salary: 200,
    date: "2024-18-3",
    totalHours: 50,
    status: "not yet",
    id: "2",
  },
  {
    bonus: 20,
    deb: 10,
    round: 1.5,
    salary: 200,
    date: "2024-18-3",
    totalHours: 50,
    status: "paid",
    id: "3",
  },
  {
    bonus: 20,
    deb: 10,
    round: 1.5,
    salary: 200,
    date: "2024-18-3",
    totalHours: 50,
    status: "paid",
    id: "4",
  },
];