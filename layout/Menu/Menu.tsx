"use client";

import { useContext } from "react";
import styles from "./Menu.module.css";
import cn from "classnames";
import { AppContext } from "@/context/app.context";
import { FirstLevelMenuItem, PageItem } from "@/interface/menu.interface";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { firstLevelMenu } from "@/helpers/helpers";

const Menu = (): JSX.Element => {
  const { menu, setMenu, firstCategory } = useContext(AppContext);
  const path = usePathname();
  const openSecondLevel = (secondCategory: string) => {
    setMenu &&
      setMenu(
        menu.map((m) => {
          if (m._id.secondCategory == secondCategory) m.isOpened = !m.isOpened;
          return m;
        }),
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
    <div>
      {menu.map((m) => {
        if (m.pages.map((p) => p.alias).includes(path.split("/")[2]))
          m.isOpened === true;
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
                [styles.secondLevelBlockOpened]: m.isOpened,
              })}
            >
              {buildThirdLevel(m.pages, menuItem.route)}
            </div>
          </div>
        );
      })}
    </div>
  );

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return pages.map((p) => (
      <a
        href={`/${route}/${p.alias}`}
        className={cn(styles.thirdLevel, {
          [styles.thirdLevelActive]: `/${route}/${p.alias}` === path,
        })}
      >
        {p.category}
      </a>
    ));
  };
  return <div className={styles.menuWrapper}>{buildFirstLevel()}</div>;
};

export default Menu;
