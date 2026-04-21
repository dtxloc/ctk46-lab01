"use client";

import Link from "next/link";

export default function CountriesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="mb-2 text-sm font-medium text-red-500">Lỗi tải dữ liệu</p>
      <h1 className="mb-3 text-3xl font-bold tracking-tight">
        Không thể tải danh sách quốc gia
      </h1>
      <p className="mb-8 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
        {error.message || "API hiện đang gặp vấn đề. Hãy thử lại sau."}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => reset()}
          className="rounded-lg bg-emerald-600 px-6 py-2.5 text-white transition-colors hover:bg-emerald-700"
        >
          Thử lại
        </button>
        <Link
          href="/"
          className="rounded-lg border border-border bg-background px-6 py-2.5 text-foreground transition-colors hover:bg-muted"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
