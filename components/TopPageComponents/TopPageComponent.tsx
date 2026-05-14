'use client';
import styles from './TopPageComponent.module.css';
import Tag from '@/components/Tag';
import { Htag } from '@/components/Htag';
import { TopPageComponentProps } from './TopPageComponent.props';
import { IhhDataProps } from '@/components/hhData/IhhDataProps';
import { TopLevelCategory } from '@/interface/page.interface';
import HhData from '@/components/hhData/HhhData';
import Advantages from '@/components/Advantages/Advantages';
import P from '@/components/P/P';
import Sort from '@/components/Sort/Sort';
import { SortEnum } from '../Sort/ISortProps';
import { useReducer } from 'react';
import { SortReducer } from './sort.reducer';

const TopPageComponent = ({
  products,
  page,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  const [{ products: sortedProducts, sort }, dispatchSort] = useReducer(
    SortReducer,
    {
      products,
      sort: SortEnum.Rating,
    },
  );
  const setSort = (sort: SortEnum) => {
    dispatchSort({ type: sort });
  };
  const hhDataVal: IhhDataProps[] = [
    {
      _id: 'frontend-react',
      count: 124,
      juniorSalary: 80000,
      middleSalary: 220000,
      seniorSalary: 420000,
      updatedAt: new Date('2026-05-01'),
    },
    {
      _id: 'backend-nodejs',
      count: 98,
      juniorSalary: 100000,
      middleSalary: 280000,
      seniorSalary: 500000,
      updatedAt: new Date('2026-05-03'),
    },
    {
      _id: 'fullstack-nextjs',
      count: 76,
      juniorSalary: 120000,
      middleSalary: 320000,
      seniorSalary: 580000,
      updatedAt: new Date('2026-05-04'),
    },
    {
      _id: 'mobile-react-native',
      count: 43,
      juniorSalary: 90000,
      middleSalary: 260000,
      seniorSalary: 470000,
      updatedAt: new Date('2026-05-05'),
    },
    {
      _id: 'devops-aws',
      count: 31,
      juniorSalary: 150000,
      middleSalary: 400000,
      seniorSalary: 700000,
      updatedAt: new Date('2026-05-06'),
    },
    {
      _id: 'python-ml',
      count: 52,
      juniorSalary: 130000,
      middleSalary: 350000,
      seniorSalary: 650000,
      updatedAt: new Date('2026-05-07'),
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="gray" size="m">
            {products.length}
          </Tag>
        )}
        <Sort sort={sort} setSort={setSort} />
      </div>
      <div>
        {sortedProducts &&
          sortedProducts.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red">hh.ru</Tag>
      </div>
      {firstCategory === TopLevelCategory.Courses && (
        <HhData {...hhDataVal[0]}></HhData>
      )}
      {page.advantages && page.advantages.length > 0 && (
        <Advantages advantages={page.advantages} />
      )}
      {page.seoText && (
        <P className={styles.seoText} size="l">
          {page.seoText}
        </P>
      )}
      <div>
        <Htag tag="h2">Получаемые навыки</Htag>
        <div className={styles.tagContainer}>
          {page.tags.map((tag, key) => (
            <Tag key={key} className={styles.tagSelf} size="m" color="primary">
              {tag}
            </Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopPageComponent;
