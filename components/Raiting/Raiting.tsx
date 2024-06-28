"use client";
import { FC, KeyboardEvent, useEffect, useState } from "react";
import StartIcon from "./Star.svg";
import { IRaitingProps } from "./IRaitingProps";
import styles from "./Raiting.module.css";
import cn from "classnames";

const Raiting: FC<IRaitingProps> = ({
  isEditable = false,
  raitnig,
  className,
  setRaiting,
  ...props
}) => {
  const [raitingArray, setRaitingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  useEffect(() => {
    constructRaiting(raitnig);
  }, [raitnig]);
  const constructRaiting = (currentRaiting: number) => {
    const updatedArray = raitingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(raitnig)}
          onClick={() => onClickIcon(i + 1)}
          className={cn(styles.star, {
            [styles.filled]: i < currentRaiting,
            [styles.editable]: isEditable,
          })}
        >
          <StartIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRaitingArray(updatedArray);
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code !== "Space" || !setRaiting) return;
    setRaiting(i);
  };
  const onClickIcon = (i: number) => {
    if (!isEditable || !setRaiting) return;
    setRaiting(i);
  };
  const changeDisplay = (i: number) => {
    if (!isEditable) return;
    constructRaiting(i);
  };
  return (
    <div {...props}>
      {raitingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Raiting;
