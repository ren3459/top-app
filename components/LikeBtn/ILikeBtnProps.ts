import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

export interface ILikeBtnProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  count: number;
  setCount: (count: number) => void;
}
