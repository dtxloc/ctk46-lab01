import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
          <Card
            key={project.id}
            className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <Badge
                  variant={
                    project.status === "Hoàn thành" ? "secondary" : "outline"
                  }
                >
                  {project.status}
                </Badge>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-4 h-full">
              <p className="text-gray-600 dark:text-gray-300 flex-1 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>

              <Button asChild variant="outline" className="mt-1 w-fit">
                <Link href={`/projects/${project.id}`}>Xem chi tiết</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
