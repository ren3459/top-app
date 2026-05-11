'use client';

import { useContext } from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';
import { AppContext } from '@/context/app.context';
import { FirstLevelMenuItem, PageItem } from '@/interface/menu.interface';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { firstLevelMenu } from '@/helpers/helpers';

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const path = usePathname();

  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) =>
          m._id.secondCategory === secondCategory
            ? { ...m, isOpened: !m.isOpened }
            : m,
        ),
      );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelMenu.map((menu) => (
          <div key={menu.route}>
            <Link href={`/${menu.route}`}>
              <div
                className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: menu.id === firstCategory,
                })}
              >
                {menu.icon} <span>{menu.name}</span>
              </div>
            </Link>
            {menu.id == firstCategory && buildSecondLevel(menu)}
          </div>
        ))}
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => (
    <ul className={styles.secondBlock}>
      {menu.map((m) => {
        const isOpened =
          m.isOpened || m.pages.some((p) => p.alias === path.split('/')[2]);

        return (
          <div key={m._id.secondCategory}>
            <div
              className={styles.secondLevel}
              onClick={() => openSecondLevel(m._id.secondCategory)}
            >
              {m._id.secondCategory}
            </div>
            <div
              className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        );
      })}
    </ul>
  );

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <Link
        key={p._id}
        href={`/${route}/${p.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: `/${route}/${p.alias}` === path,
        })}
      >
        {p.category}
      </Link>
    ));
  };
  return <div className={styles.menuWrapper}>{buildFirstLevel()}</div>;
};

export default Menu;
