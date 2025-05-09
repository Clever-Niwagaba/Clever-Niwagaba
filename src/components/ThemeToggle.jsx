import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            // document.documentElement.classList.remove("dark");
            // document.documentElement.classList.add("light");
        } else {
            setIsDarkMode(true);
            // document.documentElement.classList.remove("light");
            // document.documentElement.classList.add("dark");
        }
    };

    return (
        <button>
        {" "}
            {isDarkMode ? 
            (
                <Sun className="h-6 w-6 text-yellow-300" />
            ) : 
            (
                <Moon className="h-6 w-6 text-blue-900" />
            )}
        </button>
    );
}