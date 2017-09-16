export default function rootReducer(
  currentState = {
    menuItems: [],
    orderItems: [],
    customerInfo: null
  },
  action
) {
  switch (action.type) {
    // console.log(action);
    case 'GET_MENU_ITEMS':
      return { ...currentState, menuItems: action.menuItems };
    case 'ADD_ITEM':
      return {
        ...currentState,
        orderItems: [
          ...currentState.orderItems,
          currentState.menuItems.find(menuItem => menuItem.id === action.itemId)
        ]
      };
    case 'SUBMIT_ORDER':
      return { ...currentState, customerInfo: action.customerInfo };
    case 'CLOSE_ORDER':
      return {
        ...currentState,
        customerInfo: action.customerInfo,
        orderItems: action.orderItems
      };
    default:
      return currentState;
  }
}
