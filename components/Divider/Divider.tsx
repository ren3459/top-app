import { FC } from 'react';

import { IDividerProps } from './IDividerProps';
import styles from './Divider.module.css';
import cn from 'classnames';

const Divider: FC<IDividerProps> = ({ className, ...rest }) => {
  return <hr className={cn(styles.hr, className)} {...rest}></hr>;
};

export default Divider;
