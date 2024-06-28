import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IRaitingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  isEditable?: boolean;
  raitnig: number;
  setRaiting?: (raitnig: number) => void;
}
