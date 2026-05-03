import { Htag } from "@/components/Htag";
import Button from "@/components/Button";
import { Metadata } from "next";
import axios from "axios";
import { PostProps } from "../page";

export const metadata: Metadata = {
  title: "Post",
};

export default async function PageProducts({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const { data: post } = await axios.get<PostProps>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );

  return (
    <main>
      <Htag tag="h1">Products {params.id}</Htag>
      {post.title}
      <Button appearance="primary" arrow="right">
        btn
      </Button>
      <Button appearance="ghost" arrow="right">
        btn
      </Button>
    </main>
  );
}
