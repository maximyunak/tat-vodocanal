import React from 'react';

import styles from './Block.module.scss';
import Image from 'next/image';

// import icon from '../water.svg';
import classNames from 'classnames';

const Block = ({ title, color, num, icon }) => {
  return (
    <div className={styles.root}>
      <div className={styles.text}>
        <h3>{title}</h3>
        <h1>{num}</h1>
      </div>
      <div
        className={classNames(styles.icon, {
          [styles.red]: color === 'red',
          [styles.green]: color === 'green',
          [styles.blue]: color === 'blue',
        })}
      >
        <Image src={icon} alt="icon" />
      </div>
    </div>
  );
};

export default Block;
