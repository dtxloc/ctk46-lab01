import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Post } from "@/types/post";

async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Không thể tải danh sách bài viết");
  }

  return res.json();
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6">
        Tổng cộng {posts.length} bài viết từ JSONPlaceholder API
      </p>
      <div className="space-y-6">
        {posts.slice(0, 10).map((post) => (
          <Card key={post.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3 mb-1">
                <Badge variant="secondary">Tác giả #{post.userId}</Badge>
                <Badge variant="outline">Bài #{post.id}</Badge>
              </div>
              <Link href={`/blog/${post.id}`}>
                <CardTitle className="text-xl hover:text-blue-600 transition-colors capitalize">
                  {post.title}
                </CardTitle>
              </Link>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                {post.body}
              </p>
              <Link
                href={`/blog/${post.id}`}
                className="inline-block mt-3 text-blue-600 dark:text-blue-300 text-sm hover:underline"
              >
                Đọc thêm →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
