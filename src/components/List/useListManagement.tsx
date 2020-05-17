import { useSelector } from 'react-redux';
import { AppState } from '../../store/reducers';
import { useMemo } from 'react';

function useCarsListManagement() {
  const { carsDictionary, isLoading, searchValue } = useSelector((state: AppState) => ({
    carsDictionary: state.cars.entities,
    isLoading: state.cars.isLoading,
    searchValue: state.search.value,
  }));
  const cars = useMemo(
    () => {
      const array = Object.values(carsDictionary);
      return searchValue ? array.filter(
        car => !searchValue || car.driverName.toLowerCase().includes(searchValue),
      ) : array;
    },
    [carsDictionary, searchValue],
  );
  return {
    isLoading,
    cars,
  };
}

export default useCarsListManagement;
