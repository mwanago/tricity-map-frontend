import React, { FunctionComponent } from 'react';
import styles from './styles.module.scss';

interface Props {
  driverName: string;
  latitude: number;
  longitude: number;
}

const Element: FunctionComponent<Props> = ({
  driverName,
  latitude,
  longitude,
}) => {
  return (
    <div>
      <p className={styles.name}>{driverName}</p>
      <p className={styles.latitude}>{latitude.toFixed(4)}, {longitude.toFixed(4)}</p>
    </div>
  );
};

export default Element;
