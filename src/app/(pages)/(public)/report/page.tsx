import ReportForm from "@/src/components/shared/report/form";
import ToggleTheme from "@/src/components/ui/toggle-theme";

export default function Report() {
    return (
        <main className="flex flex-col items-center justify-center w-full min-h-screen gap-y-10">
            <ToggleTheme />
            <h1 className="text-3xl font-medium">Report a Problem</h1>
            <ReportForm />
        </main>
    );
}
