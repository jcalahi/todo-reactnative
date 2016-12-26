import * as types from '../constants/constants';

export function onInputChange(text) {
  return {
    type: types.INPUT_CHANGE,
    payload: text
  };
}
