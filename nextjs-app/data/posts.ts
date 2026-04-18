export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  author: string;
}

export const posts: Post[] = [
  {
    slug: "gioi-thieu-nextjs",
    title: "Giới thiệu Next.JS - Framework React phổ biến nhất",
    excerpt:
      "Tìm hiểu tại sao Next.JS là lựa chọn hàng đầu cho phát triển web hiện đại.",
    content: `Next.JS là một React framework mạnh mẽ được phát triển bởi Vercel.
Nó cung cấp nhiều tính năng quan trọng như Server-Side Rendering (SSR), Static Site Generation (SSG), và App Router.

Một số ưu điểm nổi bật của Next.JS:
- Routing tự động dựa trên cấu trúc thư mục
- Hỗ trợ Server Components và Client Components
- Tối ưu hóa hình ảnh, font, và scripts tự động
- API Routes tích hợp
- Hỗ trợ TypeScript sẵn có`,
    date: "2025-01-15",
    category: "Công nghệ",
    author: "Đặng Thị Xuân Lộc",
  },
  {
    slug: "hoc-tailwind-css",
    title: "Tailwind CSS - Cách tiếp cận mới cho CSS",
    excerpt:
      "Khám phá phương pháp utility-first CSS và tại sao nó thay đổi cách viết CSS.",
    content: `Tailwind CSS là một utility-first CSS framework, nghĩa là thay vì viết CSS tùy chỉnh, bạn sử dụng các class tiện ích có sẵn để xây dựng giao diện.

Ví dụ, thay vì viết:
.card { padding: 16px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

Bạn viết trực tiếp trong HTML:
<div class="p-4 rounded-lg shadow-md">...</div>

Ưu điểm:
- Không cần đặt tên class
- Không cần chuyển qua lại giữa file HTML và CSS
- File CSS cuối cùng rất nhỏ (chỉ chứa class đã dùng)`,
    date: "2025-01-20",
    category: "Công nghệ",
    author: "Đặng Thị Xuân Lộc",
  },
  {
    slug: "kinh-nghiem-hoc-lap-trinh",
    title: "Chia sẻ kinh nghiệm tự học lập trình hiệu quả",
    excerpt: "Những bài học rút ra sau 3 năm tự học lập trình ở đại học.",
    content: `Sau 3 năm học tập và thực hành lập trình, tôi rút ra một số kinh nghiệm quan trọng:

1. Thực hành nhiều hơn đọc lý thuyết
Lập trình là kỹ năng thực hành. Đọc sách và xem video chỉ chiếm 30%, 70% còn lại là viết code.

2. Xây dựng dự án thực tế
Không gì tốt hơn việc xây dựng một sản phẩm thực tế để học.
Hãy bắt đầu từ những dự án nhỏ và tăng dần độ phức tạp.

3. Tham gia cộng đồng
Tham gia các cộng đồng lập trình để học hỏi và chia sẻ kinh nghiệm.`,
    date: "2025-02-01",
    category: "Học tập",
    author: "Đặng Thị Xuân Lộc",
  },
  {
    slug: "xay-dung-api-voi-express",
    title: "Xây dựng REST API với Express từ A-Z",
    excerpt:
      "Hướng dẫn từng bước tạo API cơ bản với Express, phân tầng code và xử lý lỗi.",
    content: `Express là framework Node.js nhẹ và linh hoạt, rất phù hợp để xây dựng API.

Quy trình cơ bản:
1. Khởi tạo project và cài express
2. Tách router, controller, service theo từng module
3. Thêm middleware validate dữ liệu
4. Xử lý lỗi tập trung bằng error handler

Khi code API, hãy luôn ưu tiên tính nhất quán của response và status code.`,
    date: "2025-02-12",
    category: "Dự án cá nhân",
    author: "Đặng Thị Xuân Lộc",
  },
  {
    slug: "meo-toi-uu-hoc-typescript",
    title: "7 mẹo học TypeScript hiệu quả cho người mới",
    excerpt:
      "Các chiến lược giúp hiểu type system nhanh hơn và áp dụng ngay vào project thật.",
    content: `TypeScript giúp code an toàn và dễ bảo trì hơn khi dự án lớn dần.

Một số mẹo quan trọng:
- Bắt đầu từ kiểu dữ liệu cơ bản trước khi học generic
- Dùng interface cho object và contract giữa các module
- Không lạm dụng any, ưu tiên unknown và type guard
- Bật strict mode để phát hiện lỗi sớm

Điều quan trọng nhất là áp dụng từng chút vào dự án thật thay vì học lý thuyết rời rạc.`,
    date: "2025-02-20",
    category: "Học tập",
    author: "Đặng Thị Xuân Lộc",
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}
