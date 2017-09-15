// import rootReducer from './rootReducer';
//
// import deepFreeze from 'deep-freeze';
//
// import data from '../../mock-data';
//
// describe('rootReducer', () => {
//   it('action.type SET_ITEMS', () => {
//     const action = {
//       type: 'SET_ITEMS',
//       menuItems: [...data.menuItems]
//     };
//
//     const currentState = {
//       menuItems: null,
//       orderItems: [],
//       customerInfo: null
//     };
//
//     deepFreeze(currentState);
//
//     const nextState = {
//       menuItems: action.menuItems,
//       orderItems: [],
//       customerInfo: null
//     };
//
//     expect(rootReducer(currentState, action)).toEqual(nextState);
//   });
//
//   it('action.type SET_ADD_ITEM', () => {
//     const action = {
//       type: 'SET_ADD_ITEM',
//       orderItems: [...data.orderItems, data.itemToBeAddedToState]
//     };
//
//     const currentState = {
//       menuItems: null,
//       orderItems: [],
//       customerInfo: null
//     };
//
//     deepFreeze(currentState);
//
//     const nextState = {
//       menuItems: null,
//       orderItems: action.orderItems,
//       customerInfo: null
//     };
//
//     expect(rootReducer(currentState, action)).toEqual(nextState);
//   });
//
//   it('action.type SET_SUBMIT_ORDER', () => {
//     const action = {
//       type: 'SET_SUBMIT_ORDER',
//       customerInfo: [...data.customerInfo]
//     };
//
//     const currentState = {
//       menuItems: null,
//       orderItems: [],
//       customerInfo: null
//     };
//
//     deepFreeze(currentState);
//
//     const nextState = {
//       menuItems: null,
//       orderItems: [],
//       customerInfo: action.customerInfo
//     };
//
//     expect(rootReducer(currentState, action)).toEqual(nextState);
//   });
//
//   it('action.type SET_CLOSE_ORDER', () => {
//     const action = {
//       type: 'SET_CLOSE_ORDER',
//       customerInfo: [...data.customerInfo],
//       orderItems: [...data.orderItems]
//     };
//
//     const currentState = {
//       menuItems: null,
//       orderItems: [],
//       customerInfo: null
//     };
//
//     deepFreeze(currentState);
//
//     const nextState = {
//       menuItems: null,
//       orderItems: action.orderItems,
//       customerInfo: action.customerInfo
//     };
//
//     expect(rootReducer(currentState, action)).toEqual(nextState);
//   });
// });
