import React, { useContext, useEffect, useState } from 'react';
import styles from './List.module.scss';
import { observer } from 'mobx-react-lite';

import ListSearch from './ListSearch/ListSearch';
import Search from '../Search/Search';
import Create from './Create/Create';
import { Context } from '@/pages/_app';
import Accident from './Accident/Accident';
import axios from 'axios';

const ListPage = () => {
  const { store } = useContext(Context);

  const setVisibleCreate = (bool) => {
    store.setVisibleCreate(bool);
  };

  const setVisibleAccident = (bool) => {
    store.setVisibleAccident(bool);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.post(
          'http://89.251.144.134:5001/api/vodokanal/get_nightmans',
          {
            page: 1,
          },
          {
            headers: { Authorization: localStorage.getItem('accessToken') },
          },
        );
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Create onClose={setVisibleCreate} />
      <Accident onClose={setVisibleAccident} />
      <div className={styles.root}>
        <div>
          <h1>Список ассенизаторов</h1>
          <div className={styles.search}>
            <button className={styles.createbutton} onClick={() => store.setVisibleCreate(true)}>
              Создать
            </button>
            <Search onOpen={setVisibleCreate} />
          </div>
        </div>
        <div className={styles.accident}>
          <button className={styles.accidentButton} onClick={() => setVisibleAccident(true)}>
            Авария
          </button>
        </div>
      </div>
      <ListSearch />
    </>
  );
};

export default observer(ListPage);
