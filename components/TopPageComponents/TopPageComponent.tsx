'use client';
import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import Tag from '@/components/Tag';
import Sort from '@/components/TopPageComponents/Sort.svg';
import { Htag } from '@/components/Htag';
import { TopPageComponentProps } from './TopPageComponent.props';
import Card from '@/components/Card';

const TopPageComponent = ({
  products,
  page,
  firstCategory,
}: TopPageComponentProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title}</Htag>
        {products && (
          <Tag color="gray" size="m">
            {products.length}
          </Tag>
        )}
        <span>
          <Sort />
          По рейтингу
        </span>
      </div>
      <div>
        {products && products.map((p) => <div key={p._id}>{p.title}</div>)}
      </div>
      <div className={styles.hhTitle}>
        <Htag tag="h2">Вакансии - {page.category}</Htag>
        <Tag color="red">hh.ru</Tag>
      </div>

      <div className={styles.hh}>
        <Card className={styles.hhCount}>
          <div className={styles.hhStatTitle}>Всего вакансий</div>
          <div className={styles.hhStatCount}>{page.hh?.count}</div>
        </Card>
      </div>
    </div>
  );
};

export default TopPageComponent;
