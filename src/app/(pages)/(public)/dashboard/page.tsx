"use client";
import SectionHeader from '@/src/components/shared/section-header';
import CTable from '@/src/components/ui/basic-table';
import { AllPaymentsRowData } from '@/src/types/all-payments';
import { allPaymentsColDefs, allPaymentsRowData } from '@/src/utils/all-payments-table';

export default function Dashboard() {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <SectionHeader title="All Payments for users" />

            <CTable<AllPaymentsRowData> rowData={allPaymentsRowData} colData={allPaymentsColDefs} />
        </div>
    )
}