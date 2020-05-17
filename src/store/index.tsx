import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import combinedReducers from './reducers';
import carSocketMiddleware from './cars/middleware';

function configureStore() {
  return createStore(
    combinedReducers,
    composeWithDevTools(
      applyMiddleware(
        carSocketMiddleware(),
      ),
    ),
  );
}

export default configureStore();
