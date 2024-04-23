import React, { useContext, useEffect, useState } from 'react';

import styles from '../../styles/Header.module.scss';
import notification from './notification.svg';
import Image from 'next/image';
import { IoIosNotifications } from 'react-icons/io';
import useStore from '@/Context/useStore';
import { observer } from 'mobx-react-lite';
import axios from 'axios';
import { Context } from '@/pages/_app';

const Header = ({ userData }) => {
  // const store = useStore();
  // const [data, setData] = useState({});

  // const initials = `${data.lastName} ${data.firstName}`;

  // const { store } = useContext(Context);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const res = await axios.get('http://89.251.144.134:5001/api/vodokanal/get_user_data', {
  //         headers: { Authorization: localStorage.getItem('accessToken') },
  //       });

  //       setData(res.data.data);
  //     } catch (error) {
  //       console.error('Error fetching user data:', error);
  //     }
  //   };

  //   fetchData(); // Вызываем асинхронную функцию fetchData внутри useEffect
  // }, []);

  console.log(userData);

  return (
    <div className={styles.header}>
      <Image src={notification} alt="notification" />
      <span className={styles.line}></span>
      <div className={styles.name}>
        <h3>Иванов И.</h3>
        <h6>Admin</h6>
      </div>
    </div>
  );
};

export default observer(Header);

export const getServerSideProps = async (context) => {
  try {
    // const accessToken = context.req.headers.authorization || ''; // Get authorization token from request headers
    const accessToken = context.req.cookies.accessToken;
    const apiUrl = 'http://89.251.144.134:5001/api/vodokanal/get_user_data';
    const response = await axios.get(apiUrl, {
      headers: {
        Authorization: accessToken,
      },
    });

    const userData = response.data.data;
    return {
      props: {
        userData,
      },
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    return {
      props: {
        userData: {},
      },
    };
  }
};
