import Link from "next/link";

async function getProducts(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export function generateMetadata({ params: { id } }: Props) {
  return {
    title: id,
  };
}

export default async function Item({ params: { id } }: Props) {
  const data = await getProducts(id);

  // console.log(data);

  return (
    <>
      <h1>
        {data.id} {data.title}
      </h1>

      <Link href={"/shop"} style={{ color: "white", padding: "25px" }}>
        Back
      </Link>
    </>
  );
}
