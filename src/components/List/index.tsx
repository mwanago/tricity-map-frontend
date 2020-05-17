import React from 'react';
import useListManagement from './useListManagement';
import styles from './styles.module.scss';
import Element from './Element';
import Logo from './Logo';

const List = () => {
  const { cars } = useListManagement();
  return (
    <div className={styles.wrapper}>
      <Logo />
      <div className={styles.list}>
        {
          cars.map(car => (
            <Element
              key={car.id}
              driverName={car.driverName}
              latitude={car.currentLocation.latitude}
              longitude={car.currentLocation.longitude}
            />
          ))
        }
      </div>
    </div>
  );
};

export default List;
