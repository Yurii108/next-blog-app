"use client";

import { useEffect, useState } from "react";
import { Metadata } from "next";
import { getAllPosts } from "@/services/getPosts";
import "./style.scss";
import { Posts } from "@/components/Posts";
import { PostSearch } from "@/components/PostSearch";

export default function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? "Loading..." : <Posts posts={posts} />}
    </>
  );
}
