import { Htag } from '@/components/Htag';
import Button from '@/components/Button';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search',
};

export default function PageSearch() {
  return (
    <main>
      <Htag tag="h1">Search</Htag>
    </main>
  );
}
