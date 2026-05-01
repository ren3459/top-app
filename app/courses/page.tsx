import { Htag } from "@/components/Htag";
import Button from "@/components/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "courses",
};

export default function PageCourses({ params }: { params: { alias: string } }) {
  return (
    <main>
      <Htag tag="h1">Courses</Htag>
    </main>
  );
}
