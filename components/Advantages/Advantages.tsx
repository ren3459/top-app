import { FC } from 'react';

import styles from '@/components/Advantages/Advantages.module.css';
import { IAdvantagesProps } from './IAdvantagesProps';
import ApproveIcon from '@/helpers/icons/approve.svg';
import { Htag } from '@/components/Htag';

const Advantages: FC<IAdvantagesProps> = ({ advantages }) => {
  return (
    <div className={styles.advantagesWrapper}>
      <Htag tag="h2">Преимущества</Htag>
      {advantages.map((advantage, key) => (
        <div className={styles.advantageContainer} key={key}>
          <ApproveIcon />
          <span className={styles.advantageTitle}>{advantage.title}</span>
          <div className={styles.advantageRLine} />
          <span className={styles.advantageDescription}>
            {advantage.description}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Advantages;
