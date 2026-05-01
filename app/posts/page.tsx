import { Htag } from "@/components/Htag";
import axios from "axios";
import P from "@/components/P";
import Link from "next/link";
import { Metadata } from "next";

export interface PostProps extends Record<string, unknown> {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const metadata: Metadata = {
  title: `Posts`,
};
export default async function Posts() {
  const { data: posts } = await axios.get<PostProps[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );

  return (
    <div>
      <Htag tag="h1">Posts list page</Htag>
      {posts.map((p) => (
        <div key={p.id}>
          <Htag tag="h3">{p.title}</Htag>
          <P>{p.body}</P>
          <Link href={`/posts/${p.id}`}>go to post</Link>
        </div>
      ))}
    </div>
  );
}
