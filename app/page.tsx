"use client";
import { Htag } from "@/components";
import Button from "@/components/Button";
import Card from "@/components/Card";
import P from "@/components/P";
import Tag from "@/components/Tag";
import styles from "./page.module.css";
import Raiting from "@/components/Raiting";
import { useState } from "react";
import LikeBtn from "@/components/LikeBtn";

export default function Home() {
  const [count, setCount] = useState<number>(0);
  const [raiting, setRaiting] = useState<number>(2);
  return (
    <main className={styles.main}>
      <Htag tag="h1">Text tets</Htag>
      <Button appearance="primary" arrow="right">
        sdfdf
      </Button>
      <Button appearance="ghost" arrow="right">
        sdfdf
      </Button>
      <P>
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>
      <Tag color="green">sdfdsf</Tag>
      <LikeBtn count={count} setCount={setCount} />
      <Raiting raitnig={raiting} isEditable setRaiting={setRaiting} />
      <div className={styles.cardGrid}>
        <Card
          countLike={4}
          datePublish={"1 месяц назад"}
          href="https://ya.ru"
          imglink="../components/Card/Safari.jpg"
          timeRead={3}
          title="Как работать с CSS Grid"
          typeText="Front-end"
        >
          <u>Грид-раскладка (CSS Grid Layout)</u> представляет собой двумерную
          систему сеток в CSS. Гриды подойдут и для верстки основных областей
          страницы, и небольших элементов пользовательского интерфейса. Эта
          статья даёт общее представление о грид-раскладке и новой терминологии,
          которая является частью спецификации CSS Grid Layout Level 1. Более
          подробно показанные возможности будут описаны описаны далее в
          руководстве.
        </Card>
        <Card
          countLike={4}
          datePublish={"1 месяц назад"}
          href="https://ya.ru"
          imglink="../components/Card/Safari.jpg"
          timeRead={3}
          title="Как работать с CSS Grid"
          typeText="Front-end"
        >
          <u>Грид-раскладка (CSS Grid Layout)</u> представляет собой двумерную
          систему сеток в CSS. Гриды подойдут и для верстки основных областей
          страницы, и небольших элементов пользовательского интерфейса. Эта
          статья даёт общее представление о грид-раскладке и новой терминологии,
          которая является частью спецификации CSS Grid Layout Level 1. Более
          подробно показанные возможности будут описаны описаны далее в
          руководстве.
        </Card>
        <Card
          countLike={4}
          datePublish={"1 месяц назад"}
          href="https://ya.ru"
          imglink="../components/Card/Safari.jpg"
          timeRead={3}
          title="Как работать с CSS Grid"
          typeText="Front-end"
        >
          <u>Грид-раскладка (CSS Grid Layout)</u> представляет собой двумерную
          систему сеток в CSS. Гриды подойдут и для верстки основных областей
          страницы, и небольших элементов пользовательского интерфейса. Эта
          статья даёт общее представление о грид-раскладке и новой терминологии,
          которая является частью спецификации CSS Grid Layout Level 1. Более
          подробно показанные возможности будут описаны описаны далее в
          руководстве.
        </Card>
        <Card
          countLike={4}
          datePublish={"1 месяц назад"}
          href="https://ya.ru"
          imglink="../components/Card/Safari.jpg"
          timeRead={3}
          title="Как работать с CSS Grid"
          typeText="Front-end"
        >
          <u>Грид-раскладка (CSS Grid Layout)</u> представляет собой двумерную
          систему сеток в CSS. Гриды подойдут и для верстки основных областей
          страницы, и небольших элементов пользовательского интерфейса. Эта
          статья даёт общее представление о грид-раскладке и новой терминологии,
          которая является частью спецификации CSS Grid Layout Level 1. Более
          подробно показанные возможности будут описаны описаны далее в
          руководстве.
        </Card>
      </div>
    </main>
  );
}
