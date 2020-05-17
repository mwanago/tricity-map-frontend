import Action from '../../shared/types/Action';
import Car from '../../shared/types/Car';

export type CarsAction = Action<'Cars.ReceiveList', {
  cars: Car[],
}> | Action<'Cars.ReceiveUpdate', {
  cars: Car[],
}>;

export const carsActions = {
  receiveList(cars: Car[]): CarsAction {
    return {
      type: 'Cars.ReceiveList',
      payload: {
        cars,
      },
    };
  },
  receiveUpdate(cars: Car[]): CarsAction {
    return {
      type: 'Cars.ReceiveUpdate',
      payload: {
        cars,
      },
    };
  },
};

export default CarsAction;
