import { SidebarProps } from "./SidebarProps";
import styles from "./Sidebar.module.css";
import Menu from "../Menu/Menu";
import Logo from "../logo.svg";
import cn from "classnames";
import Link from "next/link";

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Link href={"/"}>
        <Logo className={styles.logo} />
      </Link>
      <div>Поиск </div>
      <Menu />
    </div>
  );
};

export default Sidebar;
