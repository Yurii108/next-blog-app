import Link from "next/link";
import "./style.scss";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Next App",
};

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

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
        {data.map((iphone: any) => {
          return (
            <li key={iphone.id}>
              <h3>{iphone.title}</h3>
              <p>{iphone.body}</p>

              <Link href={`/blog/${iphone.id}`}>Link - {iphone.id}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
