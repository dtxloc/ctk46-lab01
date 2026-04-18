export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Liên hệ</h1>
      <div className="space-y-4 text-gray-700 dark:text-gray-300">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 space-y-3">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:2212405@dlu.edu.vn"
              className="text-emerald-700 hover:underline dark:text-emerald-300"
            >
              2212405@dlu.edu.vn
            </a>
          </p>
          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/dtxloc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-700 hover:underline dark:text-emerald-300"
            >
              github.com/dtxloc
            </a>
          </p>
          <p>
            <strong>Điện thoại:</strong> 0335955667
          </p>
          <p>
            <strong>Địa chỉ:</strong> Đại học Đà Lạt, 01 Phù Đổng Thiên Vương,
            Đà Lạt
          </p>
        </div>
      </div>
    </div>
  );
}
