import { Htag } from '@/components/Htag';
import Button from '@/components/Button';
import { Metadata } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interface/menu.interface';
import { firstLevelMenu } from '@/helpers/helpers';
import TopPageComponent from '@/components/TopPageComponents/TopPageComponent';
import { PostProps } from '@/app/posts23/page';
import { useContext } from 'react';
import { AppContext } from '@/context/app.context';
import { ProductModel } from '@/interface/product.interface';
import { TopLevelCategory, TopPageModel } from '@/interface/page.interface';
import { fetched } from '@/api/fetched';

export const metadata: Metadata = {
  title: 'products',
};

export default async function PageProducts({
  params,
}: {
  params: { alias: string };
}) {
  // const { data: menu } = await axios.get<MenuItem[]>(
  //   `https://jsonplaceholder.typicode.com/posts/${params.alias}`,
  // );

  const { alias } = await params;
  // const { menu } = useContext(AppContext);
  const firstCategory = TopLevelCategory.Courses;
  const products: ProductModel[] = await fetched('/api/product/find', 'isr', {
    method: 'POST',
    body: { category: alias, limit: 10 },
  });
  const page: TopPageModel = await fetched(
    `/api/top-page/byAlias/${alias}`,
    'isr',
  );
  console.log(page);

  return (
    <main>
      <TopPageComponent
        products={products}
        page={page}
        firstCategory={firstCategory}
      />
    </main>
  );
}
