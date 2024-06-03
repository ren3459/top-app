import { FC } from "react";

import { ICardProps } from "./ICardProps";
import styles from "./Card.module.css";
import P from "../P";
import LikeIcon from "./like.svg";
import imagesLoc from "./Safari.jpg";
import LongArrow from "./longArrow.svg";
import Image from "next/image";

const Card: FC<ICardProps> = ({
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
            Читать <LongArrow className={styles.linkArrow}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
