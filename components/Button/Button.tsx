import { FC } from "react";
import ArrowIcon from "./Arrow.svg";
import { IButtonProps } from "./IButtonProps";
import styles from "./Button.module.css";
import cn from "classnames";

const Button: FC<IButtonProps> = ({
  children,
  appearance = "primary",
  className,
  arrow = "none",
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(
        styles.button,
        appearance === "primary" ? styles.primary : styles.ghost,
        className
      )}
    >
      {children}
      {arrow !== "none" && (
        <span
          className={cn(styles.arrow, { [styles.arDown]: arrow === "down" })}
        >
          {" "}
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};

export default Button;
