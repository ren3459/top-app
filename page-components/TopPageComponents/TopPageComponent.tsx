import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import { TopPageComponentProps } from './TopPageComponent.props';
import { PostProps } from '@/app/posts23/page';
import Tag from '@/components/Tag';
import Sort from '@/page-components/TopPageComponents/Sort.svg';

const TopPageComponent = (
  { page }: { page: PostProps },
  //   page,
  //   products,
  //   firstCategory,
  // }: TopPageComponentProps
): JSX.Element => {
  return (
    <>
      A{page.title}
      <Tag color="gray" size="m">
        10
      </Tag>
      <span>
        <Sort />
        По рейтингу
      </span>
      <span>По цене</span>
    </>
  );
};

export default TopPageComponent;
