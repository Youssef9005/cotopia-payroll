"use client";
import CTable from '@/src/components/ui/basic-table';
import { EmployeesRowData } from '@/src/types/employees-table';
import { employeesColDefs, employeesRowData } from '@/src/utils/employees-table';


export default function Employees() {
    return (
        <CTable<EmployeesRowData> rowData={employeesRowData} colData={employeesColDefs} />
    );
}
