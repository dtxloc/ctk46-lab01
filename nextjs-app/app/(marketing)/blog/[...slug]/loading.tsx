export default function BlogPostLoading() {
  return (
    <div>
      <div className="h-5 w-40 bg-gray-200 rounded animate-pulse mb-6" />
      <article>
        <div className="flex items-center gap-3 mb-4">
          <div className="h-5 w-20 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-24 bg-gray-200 rounded animate-pulse" />
          <div className="h-5 w-28 bg-gray-200 rounded animate-pulse" />
        </div>
        <div className="h-9 w-3/4 bg-gray-200 rounded animate-pulse mb-6" />
        <div className="space-y-2">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-5/6 bg-gray-200 rounded animate-pulse" />
          <div className="h-4 w-2/3 bg-gray-200 rounded animate-pulse" />
        </div>
      </article>
    </div>
  );
}
