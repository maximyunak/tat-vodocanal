import ControlPage from '@/components/Control/ControlPage';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function List() {
  return (
    <div>
      <ControlPage />
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
