import React, { useContext, useEffect } from 'react';

import styles from './StatsNightmans.module.scss';
import Search from '@/components/Search/Search';
import { Context } from '@/pages/_app';

const StatsNightmans = () => {
  const { store } = useContext(Context);

  const list = [
    'ФИО водителя',
    'Виды предпринимательства',
    'Марка',
    'Номер автомобиля',
    'Объем вывозимого ЖБО',
    'Объем утилизируемого ЖБО',
    'Полная стоимость утилизации',
  ];

  const data = [
    {
      name: 'Иванов Иван',
      tips: 'Частный',
      mark: 'МАЗ',
      num: 'О777ОО116',
      volumevivoz: '400 м3',
      volumeytil: '500 м3',
      price: '200 000',
    },
  ];

  return (
    <div className={styles.root}>
      <h1 className={styles.title}>Статистика по ассенизаторам</h1>
      <Search />
      <div>
        <div className={styles.header}>
          <ul className={styles.ul}>
            {list.map((el, id) => (
              <li key={id}>{el}</li>
            ))}
          </ul>
        </div>
        <div className={styles.data}>
          {data.map((el, index) => (
            <div key={index}>
              <ul className={styles.ul}>
                <li className={styles.bold}>{el.name}</li>
                <li>{el.tips}</li>
                <li>{el.mark}</li>
                <li>{el.num}</li>
                <li className={styles.bold}>{el.volumevivoz}</li>
                <li className={styles.bold}>{el.volumeytil}</li>
                <li className={styles.bold}>{el.price}</li>
              </ul>
              {index !== data.length - 1 && <div className={styles.line}></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StatsNightmans;
