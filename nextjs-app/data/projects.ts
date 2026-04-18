export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  detail: string;
}

export const projects: Project[] = [
  {
    id: "portfolio-website",
    title: "Website Portfolio Cá Nhân",
    description:
      "Website giới thiệu bản thân được xây dựng bằng Next.JS và Tailwind CSS",
    tech: ["Next.JS", "Tailwind CSS", "TypeScript"],
    detail:
      "Dự án tập trung vào App Router, layout lồng nhau, dynamic routes và triển khai UI responsive. Tôi dùng Tailwind CSS để xây dựng giao diện nhanh và nhất quán.",
  },
  {
    id: "student-management",
    title: "Đồ án Quản Lý Sinh Viên",
    description:
      "Ứng dụng CRUD quản lý sinh viên, điểm số và lớp học cho môn học cơ sở ngành",
    tech: ["React", "Node.js", "MySQL"],
    detail:
      "Hệ thống gồm module quản lý sinh viên, điểm môn học và thống kê cơ bản. Backend dùng Node.js + MySQL với API REST, frontend React hiển thị dữ liệu theo bảng.",
  },
  {
    id: "todo-app",
    title: "Bài Tập Lớn To-Do App",
    description:
      "Ứng dụng quản lý công việc với React, Local Storage và lọc theo trạng thái",
    tech: ["React", "CSS Modules", "JavaScript"],
    detail:
      "Ứng dụng cho phép tạo, cập nhật, đánh dấu hoàn thành và lọc công việc theo trạng thái. Dữ liệu được lưu cục bộ bằng Local Storage để giữ trạng thái sau khi reload.",
  },
  {
    id: "product-api",
    title: "API RESTful Quản Lý Sản Phẩm",
    description:
      "API quản lý sản phẩm và danh mục với Node.js, Express và MongoDB",
    tech: ["Node.js", "Express", "MongoDB"],
    detail:
      "API hỗ trợ CRUD cho sản phẩm và danh mục, có phân trang và validate dữ liệu đầu vào. Dự án giúp mình nắm rõ cấu trúc controller-service-repository.",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
