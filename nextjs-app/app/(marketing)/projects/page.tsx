import Link from "next/link";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-2 tracking-tight">Dự án</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 text-balance">
        Một số dự án tiêu biểu mình đã và đang thực hiện trong quá trình học
        tập.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:auto-rows-fr">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group rounded-2xl border border-gray-200/80 bg-white/80 p-6 shadow-sm ring-1 ring-transparent transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-emerald-200 dark:border-gray-700 dark:bg-gray-900/80 dark:hover:ring-emerald-900/70 flex flex-col"
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  project.status === "Hoàn thành"
                    ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300"
                    : "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300"
                }`}
              >
                {project.status}
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300 text-sm px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <Link
              href={`/projects/${project.id}`}
              className="mt-5 inline-flex items-center text-sm font-medium text-emerald-700 hover:text-emerald-800 dark:text-emerald-300 dark:hover:text-emerald-200"
            >
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
