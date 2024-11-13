"use client";
import CTable from '@/src/components/ui/basic-table';
import { PaymentsRowData } from '@/src/types/payment-table';
import { paymentsColDefs, paymentsRowData } from '@/src/utils/payments-table';

export default function Payments() {
    return (
        <CTable<PaymentsRowData> rowData={paymentsRowData} colData={paymentsColDefs} />
    );
}