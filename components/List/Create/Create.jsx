import React, { useContext, useEffect } from 'react';

import styles from './Create.module.scss';
import { IoMdClose } from 'react-icons/io';
import { Context } from '@/pages/_app';
import { observer } from 'mobx-react-lite';
import classNames from 'classnames';

const Create = ({ onClose }) => {
  const { store } = useContext(Context);
  // const list = [
  //   {
  //     name: 'sort1',
  //     sortBy: 'sortBy',
  //   },
  //   {
  //     name: 'sort2',
  //     sortBy: 'sortBy',
  //   },
  //   {
  //     name: 'sort3',
  //     sortBy: 'sortBy',
  //   },
  // ];

  useEffect(() => {
    var body = document.body;
    if (store.visibleCreate) {
      body.style = 'overflow: hidden';
    } else {
      body.style = 'overflow: overflow-y';
    }
  }, [store.visibleCreate]);

  return (
    <div
      className={classNames(styles.root, {
        [styles.active]: store.visibleCreate,
      })}
    >
      <form className={styles.modal}>
        <div className={styles.header}>
          <h1>Добавление ассенизаторов</h1>
          <IoMdClose onClick={() => store.setVisibleCreate(false)} />
        </div>
        <span className={styles.line}></span>
        <div>
          <p>Фамилия</p>
          <input type="text" placeholder="Введите фамилию" />
        </div>
        <div>
          <p>Имя</p>
          <input type="text" placeholder="Введите имя" />
        </div>
        <div>
          <p>Отчество</p>
          <input type="text" placeholder="Введите отчество" />
        </div>
        <div>
          <p>Пароль</p>
          <input type="text" placeholder="Введите пароль" />
          <p className={styles.desc}>Минимум 6 символов</p>
        </div>
        <div>
          <p>Email</p>
          <input type="text" placeholder="example@gmail.com" />
        </div>
        <div className={styles.select}>
          <div className={styles.select}>
            Марка автомобиля
            <select name="" id="">
              {/* <option value="" disabled selected>
                plaseholder
              </option> */}
              <option value="">газ</option>
              <option value="">маз</option>
            </select>
          </div>

          <div className={styles.info}>
            <input type="text" placeholder="A001AA116" />
            <input type="text" placeholder="Объем хранилища" />
          </div>
        </div>
        <div className={styles.fileBlock}>
          <p>Лицензия</p>
          <input type="file" id="file" className={styles.file} />
          <label htmlFor="file" className={styles.labelFile}>
            file
          </label>
        </div>

        <span className={styles.line}></span>
        <div className={styles.buttons}>
          <button className={styles.create}>Создать</button>
          <button
            type="button"
            className={styles.cancel}
            onClick={() => store.setVisibleCreate(false)}
          >
            Отмена
          </button>
        </div>
      </form>
    </div>
  );
};

export default observer(Create);
