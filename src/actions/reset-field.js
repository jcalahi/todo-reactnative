import * as types from '../constants/constants';

export function resetField() {
  return {
    type: types.RESET_FIELD,
    payload: ''
  }
}
