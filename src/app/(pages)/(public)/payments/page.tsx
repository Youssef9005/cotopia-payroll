"use client";
import SectionHeader from '@/src/components/shared/section-header';
import CTable from '@/src/components/ui/basic-table';
import { PaymentsRowData } from '@/src/types/payment-table';
import { paymentsColDefs, paymentsRowData } from '@/src/utils/payments-table';

export default function Payments() {
    return (
        <div className='flex flex-col items-center justify-center w-full'>
            <SectionHeader title="Your Payments" />
            <CTable<PaymentsRowData> rowData={paymentsRowData} colData={paymentsColDefs} />
        </div>);
}