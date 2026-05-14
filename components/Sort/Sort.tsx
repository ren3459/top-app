import { FC } from 'react';

import { ISortProps, SortEnum } from './ISortProps';
import styles from './Sort.module.css';
import cn from 'classnames';
import SortIcon from '@/helpers/icons/Sort.svg';

const Sort: FC<ISortProps> = ({ sort, setSort, className, ...rest }) => {
  return (
    <div className={cn(styles.sort, className)} {...rest}>
      <span
        onClick={() => setSort(SortEnum.Rating)}
        className={cn({ [styles.active]: sort === SortEnum.Rating })}
      >
        <SortIcon className={styles.sortIcon} />
        По рейтингу
      </span>
      <span
        onClick={() => setSort(SortEnum.Price)}
        className={cn({ [styles.active]: sort === SortEnum.Price })}
      >
        <SortIcon className={styles.sortIcon} />
        По цене
      </span>
    </div>
  );
};

export default Sort;
