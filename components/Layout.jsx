import React from 'react';
import Sidebar from './Sidebar/Sidebar';

import styles from '../styles/Layout.module.scss';
import Header from './Header/Header';

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      {<Sidebar />}
      <div className={styles.content}>
        {<Header />}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
