import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug, posts } from "@/data/posts";

interface BlogPostPageProps {
  params: Promise<{ slug: string[] }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  if (slug.length === 1) {
    const post = getPostBySlug(slug[0]);

    if (!post) {
      notFound();
    }

    return (
      <div>
        <Link
          href="/blog"
          className="text-blue-600 hover:underline text-sm mb-6 inline-block"
        >
          ← Quay lại danh sách
        </Link>
        <article>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded">
              {post.category}
            </span>
            <span className="text-sm text-gray-400">{post.date}</span>
            <span className="text-sm text-gray-500">
              Tác giả: {post.author}
            </span>
          </div>
          <h1 className="text-3xl font-bold mb-6">{post.title}</h1>
          <div className="prose max-w-none text-gray-700 whitespace-pre-line">
            {post.content}
          </div>
        </article>
      </div>
    );
  }

  return (
    <div>
      <Link
        href="/blog"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>
      <h1 className="text-2xl font-bold mb-4">
        Catch-all route đang hoạt động
      </h1>
      <p className="text-gray-600 mb-2">
        Bạn vừa truy cập đường dẫn nhiều segment: /blog/{slug.join("/")}
      </p>
      <p className="text-gray-600">
        Với [...slug], route vẫn match được URL như /blog/a/b/c thay vì trả 404
        ngay như [slug].
      </p>
    </div>
  );
}

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: [post.slug],
  }));
}
