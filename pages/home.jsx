import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home({}) {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <div className={styles['row-1']}>
        <Image
          src={'/loginImage.jfif'}
          width={1000}
          height={1000}
          className={styles.img}
          alt="Image"
        />
      </div>
      <div className={styles['row-2']}>
        <div className={styles['container-text']}>
          <h1 style={{ fontWeight: '400', fontSize: '40px' }}>Приветствуем в</h1>
          <h1 style={{ fontWeight: '800', fontSize: '48px' }}>АИС “ВОДОКАНАЛ”</h1>
        </div>

        <div className={styles.blockContainer}>
          <div className={styles.uppercase} onClick={() => router.push('/list')}>
            Вызов жбо
          </div>
          <div className={styles.uppercase}>технические условия</div>
          <div className={styles.uppercase}>сервисы</div>
          <div>ZuluGIS</div>
          <div>АРМ - оператор</div>
        </div>
      </div>
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const store = context.req; // Получите доступ к глобальному стору

//   // Проверка статуса авторизации на сервере
//   if (!store.isAuth) {
//     // Если пользователь не авторизован, выполните редирект на страницу входа
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false, // Перенаправление не будет кешироваться на клиенте
//       },
//     };
//   }
//   return {
//     props: {},
//   };
// }
