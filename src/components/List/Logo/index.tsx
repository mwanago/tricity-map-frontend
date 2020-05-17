import React from 'react';
import { ReactComponent as Image } from './logo.svg';
import styles from './styles.module.scss';

const Logo = () => {
  return (
    <div className={styles.wrapper}>
      <Image className={styles.image} />
    </div>
  );
};

export default Logo;
