'use client';
import { FC } from 'react';
import LikeSvg from '@/helpers/iconsLike.svg';
import cn from 'classnames';

import { ILikeBtnProps } from './ILikeBtnProps';
import styles from './LikeBtn.module.css';

const LikeBtn: FC<ILikeBtnProps> = ({
  className,
  count,
  setCount,
  ...rest
}) => {
  const clickLike = (i: number) => {
    setCount(i + 1);
  };
  return (
    <div>
      <span>{count}</span>
      <button
        {...rest}
        className={cn(styles.likeBtn, className)}
        onClick={() => clickLike(count)}
      >
        <LikeSvg />
      </button>
    </div>
  );
};

export default LikeBtn;
