// const url = 'https://jsonplaceholder.typicode.com';
const url = "/api";

export const getAllPosts = async () => {
  const response = await fetch(`${url}/posts`);

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(`${url}/posts?q=${search}`);

  if (!response.ok) throw new Error("Unable to fetch posts.");

  return response.json();
};
