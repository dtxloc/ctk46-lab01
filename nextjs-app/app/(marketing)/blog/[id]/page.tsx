import Link from "next/link";
import { notFound } from "next/navigation";

import { Comment, Post, User } from "@/types/post";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

async function getComments(id: string): Promise<Comment[]> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error("Không thể tải bình luận");
  }

  return res.json();
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    {
      next: { revalidate: 60 },
    },
  );

  if (!res.ok) {
    throw new Error("Không thể tải thông tin tác giả");
  }

  return res.json();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = await getPost(id);
  const [author, comments] = await Promise.all([
    getUser(post.userId),
    getComments(id),
  ]);

  return (
    <div>
      <Link
        href="/blog"
        className="text-blue-600 dark:text-blue-300 hover:underline text-sm mb-6 inline-block"
      >
        ← Quay lại danh sách
      </Link>
      <article>
        <h1 className="text-3xl font-bold mb-4 capitalize">{post.title}</h1>
        <div className="flex items-center gap-3 mb-6 text-sm text-gray-500 dark:text-gray-400 flex-wrap">
          <span>
            Tác giả:{" "}
            <strong className="text-gray-700 dark:text-gray-200">
              {author.name}
            </strong>
          </span>
          <span>•</span>
          <span>{author.email}</span>
        </div>
        <div className="prose max-w-none text-gray-700 dark:text-gray-300 whitespace-pre-line mb-8 leading-relaxed">
          {post.body}
        </div>
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
          <h3 className="font-semibold mb-2">Về tác giả</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            <strong>{author.name}</strong> (@{author.username}) —{" "}
            {author.company.name}
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            {author.company.catchPhrase}
          </p>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 mt-6">
          <h3 className="font-semibold mb-4">Bình luận</h3>
          <div className="space-y-4">
            {comments.map((comment) => (
              <article
                key={comment.id}
                className="rounded-lg border border-gray-200 dark:border-gray-700 p-4"
              >
                <div className="flex items-center justify-between gap-3 mb-2 flex-wrap">
                  <h4 className="font-medium text-gray-900 dark:text-gray-100">
                    {comment.name}
                  </h4>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {comment.email}
                  </span>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
                  {comment.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
}
