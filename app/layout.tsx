import type { Metadata } from 'next';
import './globals.css';
import { AppContextProvider } from '@/context/app.context';
import { MenuItem } from '@/interface/menu.interface';
import { TopLevelCategory } from '@/interface/page.interface';
import Header from '@/layout/Header/Header';
import Sidebar from '@/layout/Sidebar/Sidebar';
import Footer from '@/layout/Footer/Footer';
import styles from './layout.module.css';
import { getMenu } from '@/api/menu';

export const metadata: Metadata = {
  title: 'My Top-App',
  description: 'My proj',
};

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
          <div className={styles.wrapper}>
            <Header className={styles.header} />
            <Sidebar className={styles.sidebar} />
            <div className={styles.body}>{children}</div>
            <Footer className={styles.footer} />
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
}
