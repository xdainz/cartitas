import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

function DarkModeToggle() {
    const DARK_CLASS = "dark";
    const systemPrefersDark = useMediaQuery(
        { query: "(prefers-color-scheme: dark)" },
        undefined,
        (prefersDark) => {
            setIsDark(prefersDark);
        }
    );
    const [isDark, setIsDark] = useState(systemPrefersDark);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add(DARK_CLASS);
        } else {
            document.documentElement.classList.remove(DARK_CLASS);
        }
    });
    return (
        <>
            <input
                type="checkbox"
                aria-label="Dark Mode"
                checked={isDark}
                onChange={(event) => setIsDark(event.target.checked)}
            />
        </>
    );
}

export default DarkModeToggle;
