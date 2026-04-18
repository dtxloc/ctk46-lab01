import Link from "next/link";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-6xl mx-auto p-4 md:p-6">
        <div className="grid md:grid-cols-[260px_1fr] gap-6">
          <aside className="bg-white border rounded-lg p-4 h-fit">
            <h2 className="font-semibold text-lg mb-4">Dashboard</h2>
            <nav className="space-y-2 text-sm">
              <Link href="/admin" className="block hover:text-blue-600">
                Tổng quan
              </Link>
              <Link href="/blog" className="block hover:text-blue-600">
                Quản lý bài viết
              </Link>
              <Link href="/projects" className="block hover:text-blue-600">
                Quản lý dự án
              </Link>
            </nav>
          </aside>
          <main className="bg-white border rounded-lg p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
