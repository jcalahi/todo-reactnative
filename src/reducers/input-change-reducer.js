import * as types from '../constants/constants';

const INITIAL_STATE = '';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.INPUT_CHANGE:
      return action.payload;
    case types.RESET_FIELD:
      return action.payload;
    default:
      return state;
  }
}
