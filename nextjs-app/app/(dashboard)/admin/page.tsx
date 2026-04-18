export default function AdminPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Trang quản trị</h1>
      <p className="text-gray-600 mb-4">
        Đây là khu vực dashboard minh họa cho Route Groups trong App Router.
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Bài viết</p>
          <p className="text-2xl font-semibold">3</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Dự án</p>
          <p className="text-2xl font-semibold">4</p>
        </div>
        <div className="border rounded-lg p-4">
          <p className="text-sm text-gray-500">Kỹ năng</p>
          <p className="text-2xl font-semibold">6</p>
        </div>
      </div>
    </div>
  );
}
