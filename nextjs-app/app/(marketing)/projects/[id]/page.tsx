import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectById, projects } from "@/data/projects";

interface ProjectDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { id } = await params;

  // Intentional test hook: visit /projects/test-error to observe app/error.tsx.
  if (id === "test-error") {
    throw new Error("Intentional project error for testing app/error.tsx");
  }

  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Link
        href="/projects"
        className="mb-6 inline-block text-sm text-emerald-700 hover:underline dark:text-emerald-300"
      >
        ← Quay lại danh sách dự án
      </Link>

      <article className="rounded-xl border border-gray-200 p-6 dark:border-gray-700">
        <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          {project.description}
        </p>

        <p className="mb-5">
          <span
            className={`rounded-full px-2.5 py-1 text-xs ${
              project.status === "Hoàn thành"
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                : "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300"
            }`}
          >
            {project.status}
          </span>
        </p>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">Công nghệ sử dụng</h2>
          <div className="flex gap-2 flex-wrap">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Mô tả chi tiết</h2>
          <p className="whitespace-pre-line text-gray-700 dark:text-gray-300">
            {project.detail}
          </p>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id,
  }));
}
