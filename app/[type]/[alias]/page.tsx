import { Metadata } from 'next';
import TopPageComponent from '@/components/TopPageComponents/TopPageComponent';
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
  const { alias } = await params;

  const firstCategory = TopLevelCategory.Courses;
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
