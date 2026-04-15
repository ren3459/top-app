import { LayoutProps } from "./LayoutProps";
import styles from "./Layout.module.css";
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <div>
          <Sidebar />
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
