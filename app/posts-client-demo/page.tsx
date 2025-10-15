"use client";

import React, { useEffect, useState } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function PostsClientPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        setPosts(data.slice(0, 5));
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading posts...</p>;

  return (
    <main className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Daftar Post (Client Side)</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border p-4 rounded-md">
            <h2 className="font-semibold text-lg">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
