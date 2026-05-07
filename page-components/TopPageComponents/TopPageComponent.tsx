'use client';
import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import Tag from '@/components/Tag';
import Sort from '@/page-components/TopPageComponents/Sort.svg';
import { Htag } from '@/components/Htag';
import { TopPageComponentProps } from './TopPageComponent.props';

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
    </div>
  );
};

export default TopPageComponent;
