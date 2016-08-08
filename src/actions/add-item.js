export function addItem(item) {
  // Do nothing when field is empty
  if (item === undefined || item === null || item === '') {
    return {
      type: 'NULL_ITEM',
      payload: item
    };
  } else {
    return {
      type: 'ADD_ITEM',
      payload: item
    };
  }
}