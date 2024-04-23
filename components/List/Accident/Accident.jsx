import React, { useContext, useEffect } from 'react';

import styles from './Accident.module.scss';
import { IoMdClose } from 'react-icons/io';
import { Context } from '@/pages/_app';
import { observer } from 'mobx-react-lite';

import classNames from 'classnames';

const Accident = ({ onClose }) => {
  const { store } = useContext(Context);

  useEffect(() => {
    var body = document.body;
    if (store.visibleAccident) {
      body.style = 'overflow: hidden';
    } else {
      body.style = 'overflow: overflow-y';
    }
  }, [store.visibleAccident]);

  return (
    <div
      className={classNames(styles.root, {
        [styles.active]: store.visibleAccident,
      })}
    >
      <form className={styles.modal}>
        <div className={styles.header}>
          <h1>Сообщение об аварии</h1>
          <IoMdClose onClick={() => onClose(false)} />
        </div>
        <span className={styles.line}></span>
        <h3>Информация об аварии</h3>
        <div>
          <input type="text" placeholder="Местоположение аварии*" />
        </div>

        <span className={styles.line}></span>
        <div className={styles.buttons}>
          <button className={styles.create}>Отправить</button>
          <button type="button" className={styles.cancel} onClick={() => onClose(false)}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default observer(Accident);
