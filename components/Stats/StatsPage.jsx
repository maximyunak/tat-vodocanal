import React, { useContext, useEffect, useState } from 'react';
import StatsChart from './StatsChart/StatsChart';

import styles from './Stats.module.scss';
import Link from 'next/link';
import Block from './Block/Block';

import waterIcon from './water.svg';
import nightmansIcon from './nightmans.svg';
import rubIcon from './rub.svg';
import StatsNightmans from './StatsNightmans/StatsNightmans';
import { observer } from 'mobx-react-lite';
import { Context } from '@/pages/_app';

const StatsPage = () => {
  const { store } = useContext(Context);
  const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   return () => {
  //     store.setVisibleNightmans(false);
  //   };
  // }, []);

  return (
    <div className={styles.root}>
      {store.visibleStatsNightmans ? (
        <StatsNightmans />
      ) : (
        <>
          <div className={styles.header}>
            <h3 className={styles.title}>Статистика</h3>
            <div className={styles.info}>
              <Block title="Объем вывозимого ЖБО" color="red" icon={nightmansIcon} num="400 м3" />
              <Block title="Объем Утилизируемого жбо" color="blue" icon={waterIcon} num="400 м3" />
              <Block title="Объем прибыли" color="green" icon={rubIcon} num="500 000" />
            </div>
            <button className={styles.button} onClick={() => store.setVisibleNightmans(true)}>
              Статистика по ассенизаторы
            </button>
          </div>
          <StatsChart title="Статистика вывозимого ЖБО" />
          <StatsChart title="Статистика утилизируемого ЖБО" />
        </>
      )}
    </div>
  );
};

export default observer(StatsPage);
