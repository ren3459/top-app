import { FC } from 'react';

import styles from './Product.module.css';
import cn from 'classnames';
import { IProductProps } from './IProductProps';
import Card from '@/components/Card/Card';
import Rating from '@/components/Rating/Rating';
import Tag from '@/components/Tag/Tag';
import Button from '../Button';

const Product: FC<IProductProps> = ({ product, className, ...rest }) => {
  return (
    <Card className={styles.product}>
      <div className={styles.logo}>
        <img src={process.env.API_URL + product.image} alt={product.title} />
      </div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <div className={styles.credit}>{product.credit}</div>
      <div className={styles.rating}>
        <Rating rating={product.reviewAvg ?? product.initialRating} />
      </div>
      <div className={styles.tags}>
        {product.categories.map((c, k) => (
          <Tag color="ghost" key={k}>
            {c}
          </Tag>
        ))}
      </div>
      <div className={styles.priceTitle}>Цена</div>
      <div className={styles.creditTitle}>Кредит</div>
      <div className={styles.rateTitle}>{product.reviewCount}отзывов</div>

      <div className={styles.hr}>
        <hr className={styles.hr} />
      </div>
      <div className={styles.description}>{product.description}</div>
      <div className={styles.feature}>фичи</div>
      <div className={styles.advBlock}>
        <div className={styles.advantages}>
          <div>Преимущества</div>
          <div>{product.advantages}</div>
        </div>
        <div className={styles.disadvantages}>
          <div>Недостатки</div>
          <div>{product.disadvantages}</div>
        </div>
      </div>
      <div className={styles.hr}>
        <hr className={styles.hr} />
      </div>
      <div className={styles.actions}>
        <Button appearance="primary">Узнать подробнее</Button>
        <Button appearance="ghost" arrow="right">
          Читать отзывы
        </Button>
      </div>
    </Card>
  );
};

export default Product;
