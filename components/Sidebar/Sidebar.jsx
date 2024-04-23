import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

import styles from '../../styles/Sidebar.module.scss';

import truckIcon from './truck.svg';
import editIcon from './edit.svg';
import arrowsIcon from './arrows.svg';
import helpIcon from './help.svg';
import logoutIcon from './logout.svg';
import settingsIcon from './settings.svg';
import statsIcon from './stats.svg';

const Sidebar = () => {
  const { pathname } = useRouter();

  const menu1 = [
    { icon: statsIcon, title: 'Статистика', path: '/stats' },
    { icon: truckIcon, title: 'Список ассенизаторов', path: '/list' },
    { icon: editIcon, title: 'Управление заказами', path: '/control' },
    { icon: arrowsIcon, title: 'Управление сменами', path: '/changes' },
  ];

  const menu2 = [
    { icon: settingsIcon, title: 'Настройки', path: '/settings' },
    { icon: helpIcon, title: 'Помощь', path: '/help' },
    // { icon: logoutIcon, title: 'Выйти', path: '/logout' },
  ];

  const logout = () => {
    localStorage.removeItem('accessToken');
    // $api.get('/log_out').then((res) => console.log(res));
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.navbar}>
        <h5>АИС “ВОДОКАНАЛ”</h5>
        <ul>
          {menu1.map((el, index) => (
            <li key={index} className={pathname === el.path ? styles.active : ''}>
              <Image className={styles.icon} src={el.icon} alt={el.icon} />
              <Link href={el.path}>{el.title}</Link>
              <span className={styles.line}></span>
            </li>
          ))}
        </ul>
        <ul>
          {menu2.map((el, index) => (
            <li key={index} className={pathname === el.path ? styles.active : ''}>
              <Image className={styles.icon} src={el.icon} alt={el.icon} />
              <Link href={el.path}>{el.title}</Link>
              <span className={styles.line}></span>
            </li>
          ))}
          <li onClick={logout}>
            <Image alt="logout-icon" src={logoutIcon} />
            Выйти
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
