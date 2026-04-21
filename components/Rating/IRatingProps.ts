import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface IRatingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  isEditable?: boolean;
  rating: number;
  setRating?: (rating: number) => void;
}
