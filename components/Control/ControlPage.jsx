import React, { useContext } from 'react';
import ListSearch from '../List/ListSearch/ListSearch';
import Search from '../Search/Search';

import styles from './Control.module.scss';
import ControlList from './ControlList/ControlList';
import Edit from './Edit/Edit';
import { Context } from '@/pages/_app';
import { observer } from 'mobx-react-lite';
import Create from '../List/Create/Create';

const ControlPage = () => {
  const { store } = useContext(Context);

  const setVisibleEdit = (bool) => {
    store.setVisibleEdit(bool);
  };
  return (
    <>
      <Edit onClose={setVisibleEdit} />
      <Create />
      <div className={styles.root}>
        <div>
          <h1>Управление заказами</h1>
          <Search />
        </div>
      </div>
      <ControlList onOpen={setVisibleEdit} />
    </>
  );
};

export default observer(ControlPage);
