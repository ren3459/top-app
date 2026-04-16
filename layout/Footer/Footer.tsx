import { FooterProps } from "./FooterProps";
import styles from "./Footer.module.css";
import cn from "classnames";

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <div className={cn(className, styles.footerWrapper)} {...props}>
      <div className={styles.copyright}>
        OwlTop © 2020 - 2021 Все права защищены
      </div>
      <a href="#">Пользовательское соглашение</a>
      <a href="#">Политика конфиденциальности</a>
    </div>
  );
};

export default Footer;
