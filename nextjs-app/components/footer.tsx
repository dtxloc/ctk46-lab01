export default function Footer() {
  return (
    <footer className="mt-auto border-t bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p className="mb-2">
          © 2025 — Đặng Thị Xuân Lộc | CTK46 — Các công nghệ mới trong PTPM
        </p>
        <p className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/dtxloc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:underline dark:text-emerald-300"
          >
            GitHub
          </a>
          <a
            href="mailto:2212405@dlu.edu.vn"
            className="text-emerald-700 hover:underline dark:text-emerald-300"
          >
            2212405@dlu.edu.vn
          </a>
        </p>
      </div>
    </footer>
  );
}
