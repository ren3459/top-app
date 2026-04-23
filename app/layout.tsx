import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import Layout from "@/layout/Layout";

export const metadata: Metadata = {
  title: "My Top-App",
  description: "My proj",
};

const inter = Noto_Sans({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
