import { FC } from "react";

import { IPProps } from "./IPProps";
import styles from "./P.module.css";
import cn from "classnames";

const P: FC<IPProps> = ({ children, size = "m", className, ...rest }) => {
  return (
    <p
      className={cn(
        styles.p,
        {
          [styles.s]: size === "s",
          [styles.m]: size === "m",
          [styles.l]: size === "l",
        },
        className
      )}
      {...rest}
    >
      {children}
    </p>
  );
};

export default P;
