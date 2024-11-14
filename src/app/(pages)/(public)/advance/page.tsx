"use client";
import AdvanceFormDialog from '@/src/components/shared/advance';
import CTable from '@/src/components/ui/basic-table';
import { usePayroll } from '@/src/context/payroll-context';
import { AdvanceRowData } from '@/src/types/advance-table';
import { advanceColDefAdmin, advanceColDefs, advanceRowData, advanceRowDataAdmin } from '@/src/utils/advance-table';

export default function Advance() {
    const { userData } = usePayroll();

    return (
        <>
            {userData?.isAdmin ? (
                <CTable<AdvanceRowData> rowData={advanceRowDataAdmin} colData={advanceColDefAdmin} />
            ) : (
                <>
                    <CTable<AdvanceRowData> rowData={advanceRowData} colData={advanceColDefs} />
                    <AdvanceFormDialog />
                </>)}
        </>
    );
}
