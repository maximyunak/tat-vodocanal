import React from 'react';

import styles from './ControlList.module.scss';
import classNames from 'classnames';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiEdit } from 'react-icons/fi';

import Image from 'next/image';
import Pagination from '../../Pagination/Pagination';
import { observer } from 'mobx-react-lite';
import useStore from '@/Context/useStore';

const ControlList = ({ onOpen }) => {
  const store = useStore();
  const list = ['ФИО заказчика', 'Адрес', 'Объём', 'Дата и время', 'Исполнитель', 'Статус'];

  const data = [
    {
      name: 'заказчик',
      adress: 'казань',
      username: 'исполнитель',
      date: '04.04.24',
      volume: '5,7',
      status: 'Выполнен',
    },
    {
      name: 'заказчик',
      adress: 'казань',
      username: 'исполнитель',
      date: '04.04.24',
      volume: '5,7',
      status: 'В обработке',
    },
    {
      name: 'клиент',
      adress: 'казань',
      username: 'исполнитель',
      date: '04.04.24',
      volume: '5,7',
      status: 'Ассенизатор в пути',
    },
  ];

  const filtered = data.filter((item) =>
    item.name.toLowerCase().includes(store.searchText.toLowerCase()),
  );

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <ul className={styles.ul}>
          {list.map((el, id) => (
            <li key={`${id}_${el}`}>{el}</li>
          ))}
        </ul>
      </div>
      <div className={styles.data}>
        {filtered.map((el, index) => (
          <div key={`${index}_${el.name}`}>
            <ul className={styles.ul}>
              <li className={styles.name}>{el.name}</li>
              <li>{el.adress}</li>
              <li>{el.volume}</li>
              <li>{el.date}</li>
              <li>{el.username}</li>
              <li
                className={classNames(styles.status, {
                  [styles.buttonRed]: el.status === 'Отклонен',
                  [styles.buttonGreen]: el.status === 'Выполнен',
                  [styles.buttonOrange]: el.status === 'Ассенизатор в пути',
                  [styles.buttonYellow]: el.status === 'В обработке',
                })}
              >
                {el.status}
              </li>
              <li className={styles.icons}>
                <FiEdit onClick={() => onOpen(true)} style={{ width: 'auto', height: 'auto' }} />
                <RiDeleteBinLine />
              </li>
            </ul>
            {index !== filtered.length - 1 && <div className={styles.line}></div>}
          </div>
        ))}
      </div>
      <Pagination />
    </div>
  );
};

export default observer(ControlList);
