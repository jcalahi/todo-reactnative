import * as types from '../constants/constants';

export function addItem(item) {
  // Do nothing when field is empty
  if (item === undefined || item === null || item === '') {
    return {
      type: types.NULL_ITEM,
      payload: item
    };
  } else {
    return {
      type: types.ADD_ITEM,
      payload: item
    };
  }
}
