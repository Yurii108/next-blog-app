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

export async function generateMetadata({ params: { id } }: Props) {
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

      {data.body}
      <p></p>

      <Link href={"/shop"} style={{ color: "white", padding: "25px" }}>
        Back
      </Link>
    </>
  );
}
