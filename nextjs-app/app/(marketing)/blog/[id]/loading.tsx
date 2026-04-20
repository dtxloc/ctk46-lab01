export default function BlogLoading() {
  return (
    <div>
      <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mb-6" />
      <div className="border rounded-lg p-6 space-y-4">
        <div className="h-6 w-3/4 bg-gray-200 rounded animate-pulse" />
        <div className="flex gap-3">
          <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-28 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
        <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
      </div>
    </div>
  );
}
