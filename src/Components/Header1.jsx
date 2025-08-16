import { useState, useEffect } from "react";

function Header() {
  const [darkMode, setDarkMode] = useState(
    () => localStorage.theme === "dark"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <header className="flex justify-between items-center p-4 shadow-md dark:bg-gray-800">
      <h1 className="text-2xl font-bold dark:text-white">
        Crypto Price Tracker
      </h1>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
}

export default Header;
