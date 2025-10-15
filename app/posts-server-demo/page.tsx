// app/posts/page.tsx
import React from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

// ✅ fetch data di Server Component
async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store", // agar tidak di-cache oleh Next
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Daftar Post</h1>
      <ul className="space-y-4">
        {posts.slice(0, 5).map((post) => (
          <li key={post.id} className="border p-4 rounded-md">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
