import { getAllPosts } from "@/services/getPosts";
import "./style.scss";
import { Posts } from "@/components/Posts";
import Link from "next/link";
import NewPostForm from "@/components/NewPostForm";
import { revalidatePath } from "next/cache";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <>
      <h1>Blog page</h1>
      <div className="blog__panel">
        <Link href={"blog/new"}>Add new post</Link>
        {/* <PostSearch onSearch={setPosts} /> */}
      </div>

      {<Posts posts={posts} />}

      <hr />

      <NewPostForm
        onSuccess={async () => {
          "use server";
          revalidatePath("/blog");
        }}
      />
    </>
  );
}
