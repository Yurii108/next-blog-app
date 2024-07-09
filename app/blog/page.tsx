import Link from "next/link";
import "./style.scss";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Blog() {
  const data = await getPosts();

  return (
    <>
      <ul className="list">
        {data.map((posts: any) => {
          return (
            <li key={posts.id}>
              <Link href={`/blog/${posts.id}`}>{posts.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
