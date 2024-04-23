import ChangePage from '@/components/Change/ChangePage';
import React from 'react';

const changes = () => {
  return (
    <div>
      <ChangePage />
    </div>
  );
};

export default changes;

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
