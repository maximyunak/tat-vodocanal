import React, { useContext, useEffect } from 'react';

import styles from './Edit.module.scss';
import { IoMdClose } from 'react-icons/io';
import { Context } from '@/pages/_app';
import { observer } from 'mobx-react-lite';

import classNames from 'classnames';

const Edit = ({ onClose }) => {
  const { store } = useContext(Context);

  useEffect(() => {
    var body = document.body;
    if (store.visibleEdit) {
      body.style = 'overflow: hidden';
    } else {
      body.style = 'overflow: overflow-y';
    }
  }, [store.visibleEdit]);

  return (
    <div
      className={classNames(styles.root, {
        [styles.active]: store.visibleEdit,
      })}
    >
      <form className={styles.modal}>
        <div className={styles.header}>
          <h1>Назначение ассенизатора</h1>
          <IoMdClose onClick={() => onClose(false)} />
        </div>
        <span className={styles.line}></span>
        <h3>Данные об ассенизаторе</h3>
        <div>
          <input type="text" placeholder="ФИО водителя*" />
        </div>

        <span className={styles.line}></span>
        <div className={styles.buttons}>
          <button className={styles.create}>Создать</button>
          <button type="button" className={styles.cancel} onClick={() => onClose(false)}>
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default observer(Edit);
