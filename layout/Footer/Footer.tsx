import { FooterProps } from "./FooterProps";
import styles from "./Footer.module.css";
import cn from "classnames";

const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <div className={cn(className, styles.footerWrapper)} {...props}>
      <div className={styles.copyright}>
        OwlTop © 2020 - {new Date().getFullYear()} Все права защищены
      </div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </div>
  );
};

export default Footer;
