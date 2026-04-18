"use client";

import { useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setDarkMode((prev) => !prev)}
      className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200 dark:hover:bg-gray-800"
      aria-pressed={darkMode}
    >
      <span>{darkMode ? "🌙" : "☀️"}</span>
      <span>{darkMode ? "Dark mode" : "Light mode"}</span>
    </button>
  );
}
