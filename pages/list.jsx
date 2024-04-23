import ListPage from '@/components/List/ListPage';
import { Inter } from 'next/font/google';
import React, { useContext } from 'react';
import { Context } from './_app';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] });

export default function List() {
  // const router = useRouter();
  // const store = React.useContext(Context);

  return (
    <div>
      <ListPage />
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
