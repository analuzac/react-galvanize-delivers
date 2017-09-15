import getMenuItems from '../.././requests/getMenuItems';

// What we had in App.js previously:
//
// componentDidMount() {
//   getMenuItems().then(menuItems => {
//     this.props.store.dispatch({ type: 'GET_MENU_ITEMS', menuItems });
//   });
// }

export default function getMenuItemsProcess() {
  //We dont use getState or env here but leaving as placeholder
  // as a reminder that it's available to me:
  //return (dispatch, getState, env) => {
  return (dispatch, getState) => {
    // This part would be useful for loading:
    // dispatch({ type: 'GET_MENU_ITEMS_STARTED' });
    return getMenuItems().then(menuItems => {
      // This part would be useful if env is setup:
      // {
      //   databaseId: env.AIRTABLE_DATABASE_ID,
      //   token: env.AIRTABLE_TOKEN
      // }
      dispatch({ type: 'GET_MENU_ITEMS', menuItems });
      return menuItems;
    });
    // Currently only doing 'happy path' but in practice we
    // should also account for failed attempts
    // .catch(error => {
    //   dispatch({ type: 'GET_MENU_ITEMS_FAILED' });
    // });
  };
}
