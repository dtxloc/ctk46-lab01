import Link from "next/link";

export default function CountriesNotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="mb-2 text-sm font-medium text-amber-600">Không tìm thấy</p>
      <h1 className="mb-3 text-3xl font-bold tracking-tight">
        Mã quốc gia không tồn tại
      </h1>
      <p className="mb-8 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
        Có thể liên kết bị sai hoặc dữ liệu API chưa hỗ trợ mã này.
      </p>
      <Link
        href="/countries"
        className="rounded-lg bg-emerald-600 px-6 py-2.5 text-white transition-colors hover:bg-emerald-700"
      >
        Quay lại danh sách
      </Link>
    </div>
  );
}
