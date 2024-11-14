import { ColDef } from "ag-grid-community";
import { AdvanceRowData } from "../types/advance-table";
import ApprovedButton from "../components/ui/advance-button/approved-button";
import RejectButton from "../components/ui/advance-button/reject-button";

export const advanceColDefs: ColDef<AdvanceRowData>[] = [
  { headerName: "ID", field: "id", checkboxSelection: true },
  { headerName: "Date", field: "date" },
  { headerName: "Reason", field: "reason" },
  { headerName: "Amount", field: "amount" },
  { headerName: "Paid", field: "paid" },
  { headerName: "Action", field: "action" },
  { headerName: "Status", field: "status" },
];

export const advanceRowData: AdvanceRowData[] = [
  {
    id: "1",
    date: "2024-11-10",
    reason: "I need buy a new course",
    amount: 100,
    paid: 120,
    action: "Approved",
    status: "Paid",
  },
  {
    id: "2",
    date: "2024-12-10",
    reason: "I need buy a new course",
    amount: 80,
    paid: 80,
    action: "Approved",
    status: "Not Yet",
  },
  {
    id: "3",
    date: "2024-01-10",
    reason: "I need buy a new course",
    amount: 200,
    paid: 250,
    action: "Reject",
    status: "Not Yet",
  },
];

export const advanceColDefAdmin: ColDef<AdvanceRowData>[] = [
  { headerName: "ID", field: "id", checkboxSelection: true },
  { headerName: "Date", field: "date" },
  { headerName: "User Name", field: "userName" },
  { headerName: "Reason", field: "reason" },
  { headerName: "Amount", field: "amount" },
  { headerName: "Paid", field: "paid" },
  { headerName: "Action", field: "action" },
  { headerName: "Status", field: "status" },
  {
    headerName: "Actions",
    field: "actions",
    cellRenderer: ApprovedButton,
    flex: 1,
    minWidth: 120,
  },
  {
    headerName: "Actions",
    field: "actions",
    cellRenderer: RejectButton,
    flex: 1,
    minWidth: 120,
  },
];

export const advanceRowDataAdmin: AdvanceRowData[] = [
  {
    id: "1",
    date: "2024-11-10",
    userName: "Youssef",
    reason: "I need buy a new course",
    amount: 100,
    paid: 120,
    action: "Approved",
    status: "Paid",
  },
  {
    id: "2",
    date: "2024-12-10",
    userName: "Sameh",
    reason: "I need buy a new course",
    amount: 80,
    paid: 80,
    action: "Approved",
    status: "Not Yet",
  },
  {
    id: "3",
    date: "2024-01-10",
    userName: "Ahmed",
    reason: "I need buy a new course",
    amount: 200,
    paid: 250,
    action: "Reject",
    status: "Not Yet",
  },
];
