import { Htag } from "@/components/Htag";
import Button from "@/components/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "pages",
};

export default function PageProducts({
  params,
}: {
  params: { alias: string };
}) {
  return (
    <main>
      <Htag tag="h1">Dynamic params page, now {params.alias}</Htag>
      <Button appearance="primary" arrow="right">
        btn
      </Button>
      <Button appearance="ghost" arrow="right">
        btn
      </Button>
    </main>
  );
}
