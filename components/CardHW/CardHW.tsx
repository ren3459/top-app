import { FC } from 'react';

import { ICardHWProps } from './ICardHWProps';
import styles from './CardHW.module.css';
import P from '@/components/P';
import LikeIcon from '@/helpers/icons/like.svg';
import imagesLoc from '@/components/CardHW/Safari.jpg';
import LongArrow from '@/helpers/icons/longArrow.svg';
import Image from 'next/image';

const CardHW: FC<ICardHWProps> = ({
  title,
  children,
  typeText,
  timeRead,
  datePublish,
  href,
  countLike,
  imglink,
}) => {
  return (
    <div className={`${styles.card}`}>
      <Image
        src={imagesLoc}
        width={330}
        height={200}
        alt="cardImg"
        className={styles.imges}
      />
      <div>
        <div className={styles.metaCard}>
          <div>
            <span className={styles.typeTextMeta}>{typeText}</span>
            <span className={styles.dotMeta}>&#183;</span>
            <span>{datePublish}</span>
          </div>
          <span className={styles.likeMeta}>
            {countLike} <LikeIcon />
          </span>
        </div>
        <h3 className={styles.title}>{title}</h3>
        <P className={styles.truncateText}>{children}</P>
        <div className={styles.footerCard}>
          <span>{timeRead} минуты</span>
          <a href={href} className={styles.linkCard}>
            Читать <LongArrow className={styles.linkArrow} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardHW;
