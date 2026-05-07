import { ReactNode } from 'react';

export interface ICardHWProps {
  title: string;
  children: ReactNode;
  typeText: string;
  timeRead: number;
  datePublish: string;
  href: string;
  countLike: number;
  imglink: string;
}
