import { FC } from 'react';

import styles from './Input.module.css';
import cn from 'classnames';
import { IInputProps } from './IInputProps';

const Input: FC<IInputProps> = ({ className, ...rest }) => {
  return <input className={cn(styles.input, className)} {...rest} />;
};

export default Input;
