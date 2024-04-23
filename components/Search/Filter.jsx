import React, { useState } from 'react';

import filterIcon from './filter.svg';
import Image from 'next/image';
import { info } from 'sass';

import styles from './Filter.module.scss';
import classNames from 'classnames';

const Filter = () => {
  const [visible, setVisible] = useState(false);
  const [activeSort, setActiveSort] = useState(0);
  const list = [
    {
      name: 'sort1',
      sortBy: 'sortBy',
    },
    {
      name: 'sort2',
      sortBy: 'sortBy',
    },
    {
      name: 'sort3',
      sortBy: 'sortBy',
    },
  ];

  const onFilterClick = (id) => {
    setActiveSort(id);
    setVisible(false);
  };
  return (
    <div className={styles.filter}>
      <div className={styles.info} onClick={() => setVisible(!visible)}>
        Фильтр
        <Image
          className={classNames(styles.icon, {
            [styles.rotate]: visible,
          })}
          src={filterIcon}
          alt="filterIcon"
        />
      </div>
      {visible && (
        <div className={styles.popup}>
          <ul>
            {list.map((obj, id) => (
              <li
                key={id}
                className={id === activeSort ? styles.active : ''}
                onClick={() => onFilterClick(id)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
