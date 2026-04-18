"use client";

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);
  const [count, setCount] = useState(0);

  const handleLike = () => {
    if (liked) {
      setCount((prev) => prev - 1);
    } else {
      setCount((prev) => prev + 1);
    }

    setLiked((prev) => !prev);
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 rounded-lg border px-4 py-2 transition-colors ${
        liked
          ? "border-red-200 bg-red-50 text-red-600 dark:border-red-900/50 dark:bg-red-950/40 dark:text-red-300"
          : "border-gray-200 bg-white text-gray-600 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
      }`}
      aria-pressed={liked}
    >
      <span>{liked ? "❤" : "🤍"}</span>
      <span>{count} lượt thích</span>
    </button>
  );
}
