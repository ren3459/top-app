import { SidebarProps } from './SidebarProps';
import styles from './Sidebar.module.css';
import Menu from '@/layout/Menu/Menu';
import Logo from '@/helpers/icons/logo.svg';
import cn from 'classnames';
import Link from 'next/link';
import Search from '@/components/Search';

const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Link href={'/'}>
        <Logo className={styles.logo} />
      </Link>
      <div>
        <Search />
      </div>
      <Menu />
    </div>
  );
};

export default Sidebar;
