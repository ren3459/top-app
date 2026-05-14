import { FC } from 'react';

import styles from './Textarea.module.css';
import cn from 'classnames';
import { ITextareaProps } from './ITextareaProps';

const Textarea: FC<ITextareaProps> = ({ className, ...rest }) => {
  return <textarea className={cn(styles.Textarea, className)} {...rest} />;
};

export default Textarea;
