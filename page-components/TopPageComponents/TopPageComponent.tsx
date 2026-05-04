import styles from './TopPageComponent.module.css';
import cn from 'classnames';
import { TopPageComponentProps } from './TopPageComponent.props';
import { PostProps } from '@/app/posts23/page';
import Tag from '@/components/Tag';
import Sort from '@/page-components/TopPageComponents/Sort.svg';
import { Htag } from '@/components/Htag';

const TopPageComponent = (
  { page }: { page: PostProps },
  //   page,
  //   products,
  //   firstCategory,
  // }: TopPageComponentProps
): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <Htag tag="h1">{page.title.split(' ')[0]}</Htag>
        {page && (
          <Tag color="gray" size="m">
            10
            {/* // TODO add length */}
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
