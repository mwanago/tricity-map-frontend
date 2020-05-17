import { AnyAction } from 'redux';

function lastAction(state = null, action: AnyAction) {
  return action;
}

export default lastAction;
