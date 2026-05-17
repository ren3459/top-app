import { FC } from 'react';

import { IDividerProps } from './IDividerProps';
import styles from './P.module.css';
import cn from 'classnames';

const Hr: FC<IDividerProps> = ({ className, ...rest }) => {
  return <hr className={cn(styles.hr, className)} {...rest}></hr>;
};

export default Hr;
