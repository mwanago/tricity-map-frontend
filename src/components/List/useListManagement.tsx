import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { useMemo } from 'react';

function useCarsListManagement() {
  const { carsDictionary, isLoading } = useSelector((state: AppState) => ({
    carsDictionary: state.cars.entities,
    isLoading: state.cars.isLoading,
  }));
  const cars = useMemo(
    () => {
      return Object.values(carsDictionary);
    },
    [carsDictionary],
  );
  return {
    isLoading,
    cars,
  };
}

export default useCarsListManagement;
