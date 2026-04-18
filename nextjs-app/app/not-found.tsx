import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20 text-center">
      <div className="relative mx-auto mb-8 h-40 w-40">
        <div className="absolute inset-0 rounded-full bg-emerald-100 animate-ping opacity-30 dark:bg-emerald-900/40" />
        <div className="relative h-40 w-40 rounded-full bg-linear-to-br from-emerald-200 to-emerald-300 dark:from-emerald-900 dark:to-emerald-700 flex items-center justify-center text-6xl animate-bounce">
          🧭
        </div>
      </div>

      <h1 className="text-6xl font-bold text-gray-300 dark:text-gray-600 mb-4">
        404
      </h1>
      <h2 className="text-2xl font-bold mb-4">Trang không tồn tại</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
        Xin lỗi, đường dẫn bạn đang tìm kiếm không có trên website này hoặc đã
        được di chuyển.
      </p>
      <div className="flex justify-center gap-3 flex-wrap">
        <Link
          href="/"
          className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-colors inline-block"
        >
          Về trang chủ
        </Link>
        <Link
          href="/blog"
          className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors inline-block"
        >
          Khám phá Blog
        </Link>
      </div>
    </div>
  );
}
