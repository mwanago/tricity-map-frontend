import { CarsState, defaultCarsState } from './state';
import CarsAction from './actions';

const carsReducer = (
  state: CarsState = defaultCarsState,
  action: CarsAction,
) => {
  switch (action.type) {
    case 'Cars.ReceiveList': {
      const { cars } = action.payload;
      const entities = cars.reduce(
        (result, car) => {
          return {
            ...result,
            [car.id]: car,
          };
        },
        {},
      );
      return {
        ...state,
        entities,
        isLoading: false,
      };
    }
    case 'Cars.ReceiveUpdate': {
      const { cars } = action.payload;
      const entities = { ...state.entities };
      cars.forEach((car) => {
        entities[car.id] = car;
      });
      return {
        ...state,
        entities,
      };
    }
    default:
      return state;
  }
};

export default carsReducer;
