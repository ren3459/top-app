import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/layout/Layout";
import { AppContextProvider } from "@/context/app.context";
import { MenuItem } from "@/interface/menu.interface";
import { TopLevelCategory } from "@/interface/page.interface";

export const metadata: Metadata = {
  title: "My Top-App",
  description: "My proj",
};

async function getMenu(firstCategory: TopLevelCategory): Promise<MenuItem[]> {
  const domain = process.env.NEXT_PUBLIC_DOMAIN?.trim();

  if (!domain) {
    return [];
  }

  try {
    const response = await fetch(`${domain}/api/top-page/find`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ firstCategory }),
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return [];
    }

    return response.json();
  } catch {
    return [];
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const firstCategory = TopLevelCategory.Courses;
  const menu = await getMenu(firstCategory);

  return (
    <html lang="ru">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body>
        <AppContextProvider menu={menu} firstCategory={firstCategory}>
          <Layout>{children}</Layout>
        </AppContextProvider>
      </body>
    </html>
  );
}
