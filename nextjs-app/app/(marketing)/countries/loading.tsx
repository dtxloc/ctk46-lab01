export default function CountriesLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 space-y-3">
        <div className="h-6 w-40 animate-pulse rounded-full bg-muted" />
        <div className="h-9 w-72 animate-pulse rounded-lg bg-muted" />
        <div className="h-5 w-full max-w-2xl animate-pulse rounded-lg bg-muted" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 9 }).map((_, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
          >
            <div className="aspect-16/10 animate-pulse bg-muted" />
            <div className="space-y-4 p-5">
              <div className="h-6 w-3/4 animate-pulse rounded-md bg-muted" />
              <div className="h-4 w-1/2 animate-pulse rounded-md bg-muted" />
              <div className="flex gap-2">
                <div className="h-5 w-16 animate-pulse rounded-full bg-muted" />
                <div className="h-5 w-20 animate-pulse rounded-full bg-muted" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="h-12 animate-pulse rounded-lg bg-muted" />
                <div className="h-12 animate-pulse rounded-lg bg-muted" />
              </div>
              <div className="h-9 w-32 animate-pulse rounded-lg bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
