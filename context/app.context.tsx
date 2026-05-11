'use client';
import { firstLevelMenu } from '@/helpers/helpers';
import { MenuItem } from '@/interface/menu.interface';
import { TopLevelCategory } from '@/interface/page.interface';
import { usePathname } from 'next/navigation';
import { createContext, ReactNode, useEffect, useMemo, useState } from 'react';

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
  setFirstCategoryState?: (newCategory: TopLevelCategory) => void;
}

export const AppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses,
});

export const AppContextProvider = ({
  menu,
  children,
  firstCategory,
}: IAppContext & { children: ReactNode }): JSX.Element => {
  const path = usePathname();
  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };

  const currentFirstCategory = useMemo(() => {
    const type = path.split('/')[1];

    return (
      firstLevelMenu.find((m) => m.route === type)?.id ??
      firstCategory ??
      TopLevelCategory.Courses
    );
  }, [path, firstCategory]);

  useEffect(() => {
    const controller = new AbortController();

    fetch(`/api/menu?firstCategory=${currentFirstCategory}`, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          return [];
        }

        return response.json();
      })
      .then((newMenu: MenuItem[]) => {
        setMenuState(newMenu);
      })
      .catch((error) => {
        if (error.name !== 'AbortError') {
          setMenuState([]);
        }
      });

    return () => controller.abort();
  }, [currentFirstCategory]);

  return (
    <AppContext.Provider
      value={{
        menu: menuState,
        firstCategory: currentFirstCategory,
        setMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
