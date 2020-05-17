import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { useMemo } from 'react';

function useCarsListManagement() {
  const { carsDictionary } = useSelector((state: AppState) => ({
    carsDictionary: state.cars.entities,
  }));
  const cars = useMemo(
    () => {
      return Object.values(carsDictionary);
    },
    [carsDictionary],
  );
  return {
    cars,
  };
}

export default useCarsListManagement;
