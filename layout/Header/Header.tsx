import { HeaderProps } from "./HeaderProps";
import styles from "./Layout.module.css";

const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};

export default Header;
