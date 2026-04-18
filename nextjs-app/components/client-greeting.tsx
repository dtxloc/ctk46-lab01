"use client";

import { useState } from "react";

export default function ClientGreeting() {
  const [isWelcomed, setIsWelcomed] = useState(false);

  return (
    <div className="inline-flex items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-2 dark:border-gray-700 dark:bg-gray-900">
      <span className="text-sm text-gray-700 dark:text-gray-200">
        {isWelcomed ? "Chào mừng bạn quay lại!" : "Xin chào bạn!"}
      </span>
      <button
        type="button"
        onClick={() => setIsWelcomed((prev) => !prev)}
        className="rounded-md bg-emerald-600 px-3 py-1 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
      >
        Đổi lời chào
      </button>
    </div>
  );
}
