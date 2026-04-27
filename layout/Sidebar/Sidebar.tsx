import { SidebarProps } from "./SidebarProps";
import styles from "./Sidebar.module.css";
import Menu from "../Menu/Menu";

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return (
    <div {...props}>
      <Menu />
    </div>
  );
};

export default Sidebar;
