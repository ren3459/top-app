import type { Metadata } from "next";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

export const metadata: Metadata = {
  title: "My Top-App",
};
const inter = Noto_Sans({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
