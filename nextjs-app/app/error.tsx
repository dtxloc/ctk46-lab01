"use client";

import Link from "next/link";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-[70vh] max-w-5xl mx-auto px-4 py-24 text-center flex flex-col items-center justify-center">
      <p className="text-sm text-red-500 font-medium mb-2">Lỗi hệ thống</p>
      <h1 className="text-3xl font-bold mb-3">Đã xảy ra lỗi ngoài mong muốn</h1>
      <p className="text-gray-600 mb-8 max-w-2xl">
        {error.message ||
          "Ứng dụng gặp sự cố tạm thời. Bạn có thể thử lại hoặc quay về trang chủ."}
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => reset()}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Thử lại
        </button>
        <Link
          href="/"
          className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
