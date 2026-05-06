import { Htag } from "@/components/Htag";
import Button from "@/components/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "books",
};

export default function PageSearch() {
  return (
    <main>
      <Htag tag="h1">Search</Htag>
      <Button appearance="primary" arrow="right">
        btn
      </Button>
      <Button appearance="ghost" arrow="right">
        btn
      </Button>
    </main>
  );
}
