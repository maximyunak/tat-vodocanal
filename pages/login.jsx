import { Inter } from 'next/font/google';
import styles from '@/styles/Login.module.scss';
import Image from 'next/image';

import axios from 'axios';

import { useRouter } from 'next/router';
import { useContext, useState } from 'react';
import { Context } from './_app';
import Cookies from 'js-cookie';

const inter = Inter({ subsets: ['latin'] });

export default function Login({}) {
  const [login, setLogin] = useState('');
  const [pass, setPass] = useState('');
  const [error, setError] = useState(null);
  const router = useRouter();

  const { store } = useContext(Context);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://89.251.144.134:5001/api/vodokanal/login', {
        login: login,
        password: pass,
      });
      // localStorage.setItem('accessToken', `Bearer ${res.data.token}`);
      Cookies.set('accessToken', `Bearer ${res.data.token}`);
      store.setAuth(true);
      router.push('/home');
    } catch (error) {
      // Обработка ошибки при запросе
      if (error.response) {
        // Ошибка при получении ответа с ошибочным статусом (например, 401)
        setError('Неправильные логин или пароль. Попробуйте снова.');
      } else {
        // Ошибка при выполнении запроса
        setError(`${error}`);
      }
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles['row-1']}>
        <Image
          src={'/loginImage.jfif'}
          width={1000}
          height={1000}
          className={styles.img}
          alt="Image"
          priority
        />
      </div>
      <div className={styles['row-2']}>
        <div className={styles['container-text']}>
          <h1 style={{ fontWeight: '400', fontSize: '40px' }}>Приветствуем в</h1>
          <h1 style={{ fontWeight: '800', fontSize: '48px' }}>АИС “ВОДОКАНАЛ”</h1>
        </div>
        <div className={styles.authText}>
          <h3 className={styles.title}>Авторизация</h3>
          {error && <p className={styles.error}>{error}</p>}
          <form className={styles.form} onSubmit={onSubmit}>
            <input type="text" placeholder="Логин" onChange={(e) => setLogin(e.target.value)} />
            <input type="password" placeholder="Пароль" onChange={(e) => setPass(e.target.value)} />
            <label htmlFor="">Забыли пароль?</label>
            <button type="submit">Войти</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
