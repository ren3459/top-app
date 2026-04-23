import { HeaderProps } from "./HeaderProps";
import styles from "./Header.module.css";

const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return (
    <div className={styles.headerContainer} {...props}>
      <h1 className={styles.headerText}>Курсы по Photoshop 10</h1>
      <div>
        <span>По рейтингу</span>
        <span>По цене</span>
      </div>
    </div>
  );
};

export default Header;
