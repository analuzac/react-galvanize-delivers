export default function rootReducer(
  currentState = {
    menuItems: null,
    orderItems: [],
    customerInfo: null
  },
  action
) {
  switch (action.type) {
    // console.log(action);
    case 'SET_ITEMS':
      return { ...currentState, menuItems: action.menuItems };
    case 'SET_ADD_ITEM':
      return {
        ...currentState,
        orderItems: [...currentState.orderItems, action.itemToBeAddedToState]
      };
    case 'SET_SUBMIT_ORDER':
      return { ...currentState, customerInfo: action.customerInfo };
    case 'SET_CLOSE_ORDER':
      return {
        ...currentState,
        customerInfo: action.customerInfo,
        orderItems: action.orderItems
      };
    default:
      return currentState;
  }
}
