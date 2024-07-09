"use client";

export default function ErrorWrapper({ error }: { error: Error }) {
  return <h1>Sorry, something went wrong: {error.message}</h1>;
}
