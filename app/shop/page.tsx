import Link from "next/link";
import "./style.scss";

async function getProducts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Shop() {
  const data = await getProducts();

  return (
    <>
      <ul className="list">
        {data.map((iphone: any) => {
          return (
            <li key={iphone.id}>
              <h3>{iphone.title}</h3>
              <p>{iphone.body}</p>

              <Link href={`/shop/${iphone.id}`}>Link - {iphone.id}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
