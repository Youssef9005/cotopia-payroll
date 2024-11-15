"use client";
import SectionHeader from '@/src/components/shared/section-header';
import CTable from '@/src/components/ui/basic-table';
import { EmployeesRowData } from '@/src/types/employees-table';
import { employeesColDefs, employeesRowData } from '@/src/utils/employees-table';


export default function Employees() {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <SectionHeader title="All Employees" />
            <CTable<EmployeesRowData> rowData={employeesRowData} colData={employeesColDefs} />
        </div>
    );
}
