import { FooterProps } from "./FooterProps";
import styles from "./Layout.module.css";

const Footer = ({ ...props }: FooterProps): JSX.Element => {
  return <div {...props}>Footer</div>;
};

export default Footer;
