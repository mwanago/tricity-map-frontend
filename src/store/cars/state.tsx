import Car from '../../shared/types/Car';

export interface CarsState {
  isLoading: boolean;
  entities: {
    [id: string]: Car,
  };
}

export const defaultCarsState: CarsState = {
  isLoading: true,
  entities: {},
};
