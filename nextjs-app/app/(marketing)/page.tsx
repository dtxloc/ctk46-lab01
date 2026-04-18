import Link from "next/link";
import Counter from "@/components/counter";
import ThemeToggle from "@/components/theme-toggle";
import CopyButton from "@/components/copy-button";
import ClientGreeting from "@/components/client-greeting";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-emerald-100 ring-4 ring-emerald-50 dark:bg-emerald-900/50 dark:ring-emerald-950">
          <span className="text-4xl text-emerald-700 dark:text-emerald-300">
            L
          </span>
        </div>
        <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
          Xin chào! Tôi là{" "}
          <span className="text-emerald-600 dark:text-emerald-400">
            Đặng Thị Xuân Lộc
          </span>
        </h1>
        <p className="mx-auto mb-3 max-w-2xl text-xl leading-relaxed text-gray-600 dark:text-gray-300 text-balance">
          Sinh viên Công nghệ Thông tin tại Đại học Đà Lạt, yêu thích phát triển
          web fullstack và xây dựng trải nghiệm người dùng rõ ràng, dễ dùng.
        </p>
        <p className="mb-8 text-sm uppercase tracking-wide text-gray-500 dark:text-gray-400">
          MSSV: 2212405 · Lớp: CTK46
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="rounded-lg bg-emerald-600 px-6 py-3 text-white shadow-sm transition-colors hover:bg-emerald-700"
          >
            Xem dự án
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-gray-300 px-6 py-3 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800"
          >
            Liên hệ
          </Link>
        </div>

        <div className="mt-8 space-y-3">
          <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">
            Demo component tương tác (Client Component):
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Counter />
            <ThemeToggle />
            <CopyButton textToCopy="2212405@dlu.edu.vn" />
            <ClientGreeting />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-center mb-8">Kỹ năng</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "Next.JS App Router",
            "TypeScript",
            "React",
            "Tailwind CSS",
            "Node.js",
            "Git",
            "MySQL",
            "REST API",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-lg bg-gray-50 p-4 text-center transition-colors hover:bg-emerald-50 hover:text-emerald-700 dark:bg-gray-900 dark:hover:bg-emerald-950/40 dark:hover:text-emerald-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-2xl bg-emerald-50 p-8 text-center dark:bg-emerald-950/40">
        <h2 className="text-2xl font-bold mb-3">Đọc Blog của tôi</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Chia sẻ kiến thức và kinh nghiệm về lập trình, công nghệ
        </p>
        <Link
          href="/blog"
          className="font-semibold text-emerald-700 hover:underline dark:text-emerald-300"
        >
          Xem blog →
        </Link>
      </div>
    </div>
  );
}
