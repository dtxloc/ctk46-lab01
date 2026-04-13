export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Xin chào! 👋</h1>

        <p className="text-xl text-gray-600 mb-2">
          Họ và tên: <strong>Đặng Thị Xuân Lộc</strong>
        </p>

        <p className="text-xl text-gray-600 mb-2">
          MSSV: <strong>2112405</strong>
        </p>

        <p className="text-xl text-gray-600 mb-2">
          Lớp: <strong>CTK46</strong>
        </p>

        <p className="text-xl text-gray-600 mb-4">
          Tôi là sinh viên CNTT, đam mê lập trình web.
        </p>

        <div className="bg-blue-100 p-4 rounded-lg mb-4">
          🚀 Đây là project Next.js đầu tiên của tôi!
        </div>

        <div className="bg-green-100 p-4 rounded-lg">
          <h2 className="font-bold mb-2">Sở thích</h2>
          <ul>
            <li>💻 Lập trình</li>
            <li>📚 Học công nghệ</li>
            <li>🎮 Giải trí</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
