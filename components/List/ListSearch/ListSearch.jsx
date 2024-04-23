import React from 'react';

import styles from './ListSearch.module.scss';
import classNames from 'classnames';

import greenFileIcon from './green-file.svg';
import redFileIcon from './red-file.svg';
import locationIcon from './location.svg';
import Image from 'next/image';
import Pagination from '../../Pagination/Pagination';
import useStore from '@/Context/useStore';
import { observer } from 'mobx-react-lite';

const ListSearch = () => {
  const store = useStore();
  const list = [
    'ФИО водителя',
    'Виды предпринимательства',
    'Марка',
    'Номер автомобиля',
    'Объем',
    'Статус',
  ];

  const data = [
    {
      name: 'Иванов Иван',
      tips: 'Частный',
      mark: 'МАЗ',
      num: 'О777ОО116',
      volume: '5,7',
      status: 'Онлайн',
      isOk: true,
    },
    {
      name: 'АВванов Иван',
      tips: 'Государственный',
      mark: 'Газ',
      num: 'О777ОО116',
      volume: '5,7',
      status: 'Едет на заказ',
      isOk: true,
    },
    {
      name: 'Гванов Иван',
      tips: 'Частный',
      mark: 'МАЗ',
      num: 'О777ОО116',
      volume: '5,7',
      status: 'Не в сети',
      isOk: false,
    },
    {
      name: 'Иванов Иван',
      tips: 'Государственный',
      mark: 'Газ',
      num: 'О777ОО116',
      volume: '5,7',
      status: 'Едет на заказ',
      isOk: true,
    },
    {
      name: 'Иванов Иван',
      tips: 'Частный',
      mark: 'МАЗ',
      num: 'О777ОО116',
      volume: '5,7',
      status: 'Не в сети',
      isOk: false,
    },
    {
      name: 'Иванов Иван',
      tips: 'Государственный',
      mark: 'Газ',
      num: 'О777ОО116',
      volume: '5,7',
      status: 'Едет на заказ',
      isOk: true,
    },
    {
      name: 'Иванов Иван',
      tips: 'Частный',
      mark: 'МАЗ',
      num: 'О777ОО116',
      volume: '5,7',
      status: 'Не в сети',
      isOk: false,
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
            <li key={id}>{el}</li>
          ))}
        </ul>
      </div>
      <div className={styles.data}>
        {filtered.map((el, index) => (
          <div key={index}>
            <ul className={styles.ul}>
              <li className={styles.name}>{el.name}</li>
              <li>{el.tips}</li>
              <li>{el.mark}</li>
              <li>{el.num}</li>
              <li>{el.volume}</li>
              <li
                className={classNames(styles.status, {
                  [styles.buttonRed]: el.status === 'Не в сети',
                  [styles.buttonGreen]: el.status !== 'Не в сети',
                })}
              >
                {el.status}
              </li>
              <li className={styles.icons}>
                <Image src={locationIcon} alt="map" style={{ width: 'auto', height: 'auto' }} />
                <Image src={el.isOk ? greenFileIcon : redFileIcon} alt="file-icon" />
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

export default observer(ListSearch);
