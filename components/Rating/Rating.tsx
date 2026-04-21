"use client";
import { FC, KeyboardEvent, useCallback, useEffect, useState } from "react";
import StarIcon from "./Star.svg";
import { IRatingProps } from "./IRatingProps";
import styles from "./Rating.module.css";
import cn from "classnames";

const Rating: FC<IRatingProps> = ({
  isEditable = false,
  rating,
  className,
  setRating,
  ...props
}) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>),
  );

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          key={i}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClickIcon(i + 1)}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
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
      );
    });
    setRatingArray(updatedArray);
  };

  useEffect(() => {
    constructRating(rating);
  }, [constructRating, rating]);

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== "Space" || !setRating) return;
    setRating(i);
  };
  const onClickIcon = (i: number) => {
    if (!isEditable || !setRating) return;
    setRating(i);
  };
  const changeDisplay = (i: number) => {
    if (!isEditable) return;
  };
  constructRating(i);
  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
