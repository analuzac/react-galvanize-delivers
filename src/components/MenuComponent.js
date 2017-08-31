import React from 'react';

import MenuItemComponent from './MenuItemComponent';

export default function MenuComponent({ menuItems, onAddItem }) {
  if (menuItems !== null) {
    return (
      <div className="MenuComponent">
        {menuItems.map(menuItem =>
          <MenuItemComponent
            key={menuItem.id}
            menuItem={menuItem}
            onAddItem={onAddItem}
          />
        )}
      </div>
    );
  } else {
    return <div>LOADING ONE SECOND :P</div>;
  }
}
