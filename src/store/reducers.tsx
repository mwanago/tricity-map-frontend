import { combineReducers } from 'redux';
import cars from './cars/reducer';
import search from './search/reducer';
import CarsAction from './cars/actions';
import lastAction from './lastAction';
import { SearchState } from './search/state';
import { CarsState } from './cars/state';
import { SearchAction } from './search/actions';

export interface AppState {
  cars: CarsState;
  lastAction: CarsAction | SearchAction;
  search: SearchState;
}

export default combineReducers({
  cars,
  search,
  lastAction,
});
