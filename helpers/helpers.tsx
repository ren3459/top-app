import CoursesIcon from "@/layout/Menu/icons/courses.svg";
import ServicesIcon from "@/layout/Menu/icons/service.svg";
import BooksIcon from "@/layout/Menu/icons/books.svg";
import ProductsIcon from "@/layout/Menu/icons/products.svg";

import { TopLevelCategory } from "@/interface/page.interface";
import { FirstLevelMenuItem } from "@/interface/menu.interface";

export const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: "courses",
    name: "Курсы",
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses,
  },
  {
    route: "services",
    name: "Сервисы",
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services,
  },
  {
    route: "books",
    name: "Книги",
    icon: <BooksIcon />,
    id: TopLevelCategory.Books,
  },
  {
    route: "products",
    name: "Продукты",
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products,
  },
];
