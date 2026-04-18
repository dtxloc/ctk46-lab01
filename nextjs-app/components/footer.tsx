export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-6 text-center text-gray-500 text-sm">
        <p className="mb-2">
          © 2025 — Đặng Thị Xuân Lộc | CTK46 — Các công nghệ mới trong PTPM
        </p>
        <p className="flex items-center justify-center gap-4">
          <a
            href="https://github.com/dtxloc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
          <a
            href="mailto:2212405@dlu.edu.vn"
            className="text-blue-600 hover:underline"
          >
            2212405@dlu.edu.vn
          </a>
        </p>
      </div>
    </footer>
  );
}
