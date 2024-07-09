import { Metadata } from "next";
import Link from "next/link";

async function getProducts(id: string) {
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

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const data = await getProducts(id);

  return {
    title: data.title,
  };
}

export default async function Item({ params: { id } }: Props) {
  const data = await getProducts(id);

  return (
    <>
      <h1>
        {data.id} {data.title}
      </h1>

      <p>{data.body}</p>

      <Link href={"/blog"}>Back</Link>
    </>
  );
}
