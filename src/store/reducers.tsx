import { combineReducers } from 'redux';
import cars from './cars/reducer';
import { CarsState } from './cars/state';
import CarsAction from './cars/actions';
import lastAction from './lastAction';

export interface AppState {
  cars: CarsState;
  lastAction: CarsAction;
}

export default combineReducers({
  cars,
  lastAction,
});
