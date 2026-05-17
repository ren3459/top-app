'use client';
import { FC, KeyboardEvent, useEffect, useState } from 'react';
import StarIcon from '@/helpers/icons/Star.svg';
import { IRatingProps } from './IRatingProps';
import styles from './Rating.module.css';
import cn from 'classnames';

const Rating: FC<IRatingProps> = ({
  isEditable = false,
  rating,
  className,
  setRating,
  ...props
}) => {
  const [displayRating, setDisplayRating] = useState(rating);

  useEffect(() => {
    setDisplayRating(rating);
  }, [rating]);

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== 'Space' || !setRating) return;
    setRating(i);
  };

  const onClickIcon = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };

  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    setDisplayRating(i);
  };

  return (
    <div className={className} {...props}>
      {new Array(5).fill(null).map((_, i) => (
        <span
          key={i}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClickIcon(i + 1)}
          className={cn(styles.star, {
            [styles.filled]: i < displayRating,
            [styles.editable]: isEditable,
          })}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      ))}
    </div>
  );
};

export default Rating;
