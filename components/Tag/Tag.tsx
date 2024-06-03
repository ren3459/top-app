import { FC } from "react";
import cn from "classnames";

import { ITagProps } from "./ITagProps";
import styles from "./Tag.module.css";

const Tag: FC<ITagProps> = ({
  size = "m",
  className,
  children,
  color = "ghost",
  href,
  ...rest
}) => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.m]: size === "m",
        [styles.l]: size === "l",
        [styles.ghost]: color === "ghost",
        [styles.green]: color === "green",
        [styles.red]: color === "red",
        [styles.grey]: color === "grey",
        [styles.primary]: color === "primary",
      })}
      {...rest}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};

export default Tag;
