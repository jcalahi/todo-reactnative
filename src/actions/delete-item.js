export function deleteItem(item) {
  return {
    type: 'DELETE_ITEM',
    payload: item
  };
}
