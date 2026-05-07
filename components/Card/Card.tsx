import { FC } from 'react';

import { ICardProps } from './ICardProps';
import styles from './Card.module.css';
import cn from 'classnames';

const Card: FC<ICardProps> = ({
  children,
  color = 'white',
  className,
  ...rest
}) => {
  return (
    <div
      className={cn(
        styles.card,
        {
          [styles.blue]: color === 'blue',
        },
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
