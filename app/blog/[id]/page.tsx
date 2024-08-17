import { getAllPosts } from "@/services/getPosts";
import { Metadata } from "next";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import { redirect } from "next/navigation";

async function postById(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateStaticParams() {
  const posts: any[] = await getAllPosts();

  return posts.map((post) => ({ slug: post.id.toString() }));
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const data = await postById(id);

  return {
    title: data.title,
  };
}

async function removePost(id: string) {
  "use server";

  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "DELETE",
  });

  revalidatePath("/blog");
  redirect("/blog");
}

export default async function Item({ params: { id } }: Props) {
  const data = await postById(id);

  return (
    <>
      <h1>
        {data.id} {data.title}
      </h1>

      <p>{data.body}</p>

      <Link href={"/blog"}>Back</Link>

      <form action={removePost.bind(null, id)}>
        <input type="submit" value="delete post" />
      </form>
    </>
  );
}
