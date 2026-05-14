'use client';
import { FC, KeyboardEventHandler, useState } from 'react';
import { ISearchProps } from './ISearchProps';
import styles from './Search.module.css';
import cn from 'classnames';
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import SearchIcon from '@/helpers/icons/search.svg';
import { useRouter } from 'next/navigation';

const Search: FC<ISearchProps> = ({ className, ...rest }) => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    router.push(`/search?q=${search}`);
  };
  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key == 'Enter') goToSearch();
  };
  return (
    <div className={cn(styles.search, className)} {...rest}>
      <Input
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className={styles.input}
        onKeyDown={handleKeyDown}
      />
      <Button appearance="primary" className={styles.btn} onClick={goToSearch}>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default Search;
