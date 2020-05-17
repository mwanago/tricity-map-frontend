import { Middleware } from 'redux';
import io from 'socket.io-client';
import SocketEvents from '../../shared/types/SocketEvents';
import { carsActions } from './actions';
import Car from '../../shared/types/Car';

const carSocketMiddleware = (): Middleware => {
  return (store) => {
    const socket = io(`${process.env.REACT_APP_API_URL}/cars`);
    socket.on(SocketEvents.InitialData, (cars: Car[]) => {
      store.dispatch(carsActions.receiveList(cars));
    });
    socket.on(SocketEvents.MovementData, (cars: Car[]) => {
      console.log('update came', cars.length);
      store.dispatch(carsActions.receiveUpdate(cars));
    });
    socket.on('connect', () => {
      console.log('connected');
    });
    return next => (action) => {
      return next(action);
    };
  };
};

export default carSocketMiddleware;
