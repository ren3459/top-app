import { SidebarProps } from "./SidebarProps";
import styles from "./Sidebar.module.css";

const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};

export default Sidebar;
