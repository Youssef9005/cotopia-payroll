import ToggleTheme from "../../ui/toggle-theme"

interface Props {
    title: string;
}

export default function SectionHeader({ title }: Props) {
    return (
        <header className="w-full px-5 py-3 flex items-center justify-between">
            <h1 className="text-xl font-medium">{title}</h1>
            <ToggleTheme />
        </header>
    )
}