import { combineReducers } from 'redux';
import cars from './cars/reducer';
import { CarsState } from './cars/state';

export interface AppState {
  cars: CarsState;
}

export default combineReducers({
  cars,
});
