import { Htag } from '@/components/Htag';
import Button from '@/components/Button';
import { Metadata } from 'next';
import axios from 'axios';
import { MenuItem } from '@/interface/menu.interface';
import { firstLevelMenu } from '@/helpers/helpers';
import TopPageComponent from '@/page-components/TopPageComponents/TopPageComponent';
import { PostProps } from '@/app/posts23/page';

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
  const page: PostProps = await fetch(
    // 'https://jsonplaceholder.typicode.com/posts',
    `https://jsonplaceholder.typicode.com/posts/${alias}`,

    {
      method: 'GET',
    },
  ).then((res) => res.json());
  console.log(alias);

  return (
    <main>
      <TopPageComponent page={page} />
      {/* products={} firstCategory={} /> */}
      <Htag tag="h1">Products {params.alias}</Htag>
      <Button appearance="primary" arrow="right">
        btn
      </Button>
      <Button appearance="ghost" arrow="right">
        btn
      </Button>
    </main>
  );
}
