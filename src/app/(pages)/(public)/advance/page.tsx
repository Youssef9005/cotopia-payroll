"use client";
import AdvanceFormDialog from '@/src/components/shared/advance';
import CTable from '@/src/components/ui/basic-table';
import { AdvanceRowData } from '@/src/types/advance-table';
import { advanceColDefs, advanceRowData } from '@/src/utils/advance-table';

export default function Advance() {
    return (
        <>
            <CTable<AdvanceRowData> rowData={advanceRowData} colData={advanceColDefs} />
            <AdvanceFormDialog />
        </>
    );
}
