import { redirect } from "next/navigation";

export default function NewPostForm({
  onSuccess,
}: {
  onSuccess: (id?: number) => Promise<void>;
}) {
  async function createPost(data: FormData) {
    "use server";

    const { title, body } = Object.fromEntries(data);

    const response = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, body, userId: 1 }),
    });

    const post = await response.json();
    console.log(post, "log");
    await onSuccess(post.id);
  }

  return (
    <form className="new-post-form" action={createPost}>
      <input typeof="text" placeholder="title" name="title" required></input>
      <textarea name="body" placeholder="content"></textarea>
      <div>
        <input type="submit" value={"add post"} />
      </div>
    </form>
  );
}
