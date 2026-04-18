const projects = [
  {
    title: "Website Portfolio Cá Nhân",
    description:
      "Website giới thiệu bản thân được xây dựng bằng Next.JS và Tailwind CSS",
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
  },
  {
    title: "Đồ án Quản Lý Sinh Viên",
    description:
      "Ứng dụng CRUD quản lý sinh viên, điểm số và lớp học cho môn học cơ sở ngành",
    tech: ["React", "Node.js", "MySQL"],
  },
  {
    title: "Bài Tập Lớn To-Do App",
    description:
      "Ứng dụng quản lý công việc với React, Local Storage và lọc theo trạng thái",
    tech: ["React", "CSS Modules", "JavaScript"],
  },
  {
    title: "API RESTful Quản Lý Sản Phẩm",
    description:
      "API quản lý sản phẩm và danh mục với Node.js, Express và MongoDB",
    tech: ["Node.js", "Express", "MongoDB"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Dự án</h1>
      <div className="grid gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-md transition-shadow"
          >
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
