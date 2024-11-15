"use client";
import AdvanceFormDialog from '@/src/components/shared/advance';
import SectionHeader from '@/src/components/shared/section-header';
import CTable from '@/src/components/ui/basic-table';
import { usePayroll } from '@/src/context/payroll-context';
import { AdvanceRowData } from '@/src/types/advance-table';
import { advanceColDefAdmin, advanceColDefs, advanceRowData, advanceRowDataAdmin } from '@/src/utils/advance-table';

export default function Advance() {
    const { userData } = usePayroll();

    return (
        <>

            {userData?.isAdmin ? (
                <div className='flex flex-col items-center justify-center w-full'>
                    <SectionHeader title="All Advance Requests For User" />
                    <CTable<AdvanceRowData> rowData={advanceRowDataAdmin} colData={advanceColDefAdmin} />
                </div>
            ) : (
                <>
                    <div className='flex flex-col items-center justify-center w-full'>
                        <SectionHeader title="Your Advance Requests" />
                        <CTable<AdvanceRowData> rowData={advanceRowData} colData={advanceColDefs} />
                        <AdvanceFormDialog />
                    </div>
                </>)}
        </>
    );
}
