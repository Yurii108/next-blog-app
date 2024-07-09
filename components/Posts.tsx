import Link from "next/link";

type Props = {
  posts: any[];
};

const Posts = ({ posts }: Props) => {
  return (
    <ul className="list">
      {posts.map((posts: any) => {
        return (
          <li key={posts.id}>
            <Link href={`/blog/${posts.id}`}>{posts.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export { Posts };
