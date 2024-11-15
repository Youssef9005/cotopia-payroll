"use client"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme()

    function handleChangeTheme() {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
    }

    return (
        <div className="fixed top-5 right-5" >
            {theme === "dark" ? <Sun size={25} onClick={handleChangeTheme} /> : <Moon size={25} onClick={handleChangeTheme} />}
        </div>
    )
}