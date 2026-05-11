import { Metadata } from 'next';
import TopPageComponent from '@/components/TopPageComponents/TopPageComponent';
import { ProductModel } from '@/interface/product.interface';
import { TopLevelCategory, TopPageModel } from '@/interface/page.interface';
import { fetched } from '@/api/fetched';
import { firstLevelMenu } from '@/helpers/helpers';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'products',
};

export default async function PageProducts({
  params,
}: {
  params: { alias: string; type: string };
}) {
  const { type, alias } = (await params) ?? [];

  const firstCategoryItem = firstLevelMenu.find((m) => m.route === type);
  if (!firstCategoryItem) notFound();
  const firstCategory = firstCategoryItem.id;
  console.log(alias);

  const products: ProductModel[] = await fetched('/api/product/find', 'isr', {
    method: 'POST',
    body: { category: alias, limit: 10 },
  });

  const page: TopPageModel = await fetched(
    `/api/top-page/byAlias/${alias}`,
    'isr',
  );

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
