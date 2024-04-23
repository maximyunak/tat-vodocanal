import React, { useContext } from 'react';
import searchIcon from './search.svg';
import Image from 'next/image';
import Filter from './Filter';
import { observer } from 'mobx-react-lite';

import styles from './Search.module.scss';

import { Context } from '@/pages/_app';
import useStore from '@/Context/useStore';

const Search = () => {
  // const store = useStore()

  const { store } = useContext(Context);

  console.log(store.searchText);

  return (
    <div className={styles.root}>
      <div className={styles.search}>
        <div className={styles.input}>
          <input
            className={styles.input}
            type="text"
            placeholder="Поиск..."
            onChange={(e) => store.setSearchText(e.target.value)}
          />
          <Image className={styles.glass} src={searchIcon} alt="searchIcon" />
        </div>
        <div>
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default observer(Search);
