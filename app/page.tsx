import { Htag } from "@/components/Htag";
import Button from "@/components/Button";
import P from "@/components/P";
import Tag from "@/components/Tag";
import styles from "./page.module.css";
import Rating from "@/components/Rating";
import LikeBtn from "@/components/LikeBtn";
import { GetStaticProps } from "next";
import axios from "axios";
import { MenuItem } from "@/interface/menu";

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

// export const getStaticProps: GetStaticProps<HomeProps> = async () => {
//   const firstCategory = 0;
//   const { data: menu } = await axios.post<MenuItem[]>(
//     process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
//     { firstCategory },
//   );
//   console.log(menu);

//   return { props: { menu, firstCategory } };
// };

export default async function Home() {
  // const [count, setCount] = useState<number>(0);
  // const [rating, setRating] = useState<number>(2);
  const firstCategory = 0;
  const { data: menu } = await axios.get<MenuItem[]>(
    "https://jsonplaceholder.typicode.com/posts",
    // process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    // { firstCategory },
  );
  return (
    <main className={styles.main}>
      <Htag tag="h1">Text tets</Htag>
      {/* <ul>
        {menu.map((val, key) => (
          <li key={key}>{val._id.secondCategory}</li>
        ))}
      </ul> */}
      <Button appearance="primary" arrow="right">
        btn
      </Button>
      <Button appearance="ghost" arrow="right">
        btn
      </Button>
      <P>
        Студенты освоят не только hard skills, необходимые для работы
        веб-дизайнером, но и soft skills — навыки, которые позволят эффективно
        взаимодействовать в команде с менеджерами, разработчиками и
        маркетологами. Выпускники факультета могут успешно конкурировать с
        веб-дизайнерами уровня middle.
      </P>
      <Tag color="green">sdfdsf</Tag>
      {/* <LikeBtn count={count} setCount={setCount} />
      <Rating rating={rating} isEditable setRating={setRating} /> */}
      {/* <div className={styles.cardGrid}>
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
      </div> */}
    </main>
  );
}
