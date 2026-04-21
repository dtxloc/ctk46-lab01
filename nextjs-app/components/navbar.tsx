"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const nextDark = savedTheme ? savedTheme === "dark" : prefersDark;

    document.documentElement.classList.toggle("dark", nextDark);
  }, []);

  const toggleTheme = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("theme", next ? "dark" : "light");
  };

  const navLinks = [
    { href: "/", label: "Trang chủ" },
    { href: "/about", label: "Giới thiệu" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Dự án" },
    { href: "/countries", label: "Quốc gia" },
    { href: "/guestbook", label: "Lưu bút" },
    { href: "/skills", label: "Kỹ năng" },
    { href: "/contact", label: "Liên hệ" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 shadow-sm backdrop-blur-md dark:border-gray-800 dark:bg-gray-900/80">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-emerald-600 dark:text-emerald-400"
          >
            Đặng Thị Xuân Lộc
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 transition-colors hover:text-emerald-600 dark:text-gray-300 dark:hover:text-emerald-400"
              >
                {item.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-md border border-gray-300 px-3 py-1.5 text-sm text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800"
            >
              Theme
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-md border border-gray-300 px-2.5 py-1.5 text-sm text-gray-700 dark:border-gray-700 dark:text-gray-200"
              aria-label="Đổi giao diện sáng tối"
            >
              ◐
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="rounded-md border border-gray-300 px-2.5 py-1.5 text-gray-700 dark:border-gray-700 dark:text-gray-200"
              aria-expanded={mobileOpen}
              aria-label="Mở menu điều hướng"
            >
              ☰
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="mt-3 grid gap-2 rounded-xl border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-800 dark:bg-gray-900 md:hidden">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-3 py-2 text-gray-700 transition-colors hover:bg-emerald-50 hover:text-emerald-700 dark:text-gray-200 dark:hover:bg-emerald-950/50 dark:hover:text-emerald-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
