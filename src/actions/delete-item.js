import * as types from '../constants/constants';

export function deleteItem(item) {
  return {
    type: types.DELETE_ITEM,
    payload: item
  };
}
