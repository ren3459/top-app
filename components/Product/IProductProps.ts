import { ProductModel } from '@/interface/product.interface';
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface IProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: ProductModel;
}
