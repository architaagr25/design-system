import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const current = html.classList.contains("dark");
    setIsDark(current);
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;

    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      html.classList.add("light");
      setIsDark(false);
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
      setIsDark(true);
    }
  };

  return (

    <div className="transition-all duration-300 p-6 rounded-lg shadow-md bg-white text-black dark:bg-gray-900 dark:text-white">
      <p className="mb-4 text-lg font-semibold">
        Current Theme: {isDark ? "Dark" : "Light"}
      </p>

 
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:opacity-80"
      >
        {isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
};

export default ThemeToggle;
