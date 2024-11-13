"use client";
import CTable from '@/src/components/ui/basic-table';
import { AllPaymentsRowData } from '@/src/types/all-payments';
import { allPaymentsColDefs, allPaymentsRowData } from '@/src/utils/all-payments-table';

export default function Dashboard() {
    return (
        <CTable<AllPaymentsRowData> rowData={allPaymentsRowData} colData={allPaymentsColDefs} />
    )
}