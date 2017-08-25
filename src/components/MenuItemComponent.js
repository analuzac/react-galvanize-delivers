import React from 'react';

export default function MenuItemComponent({ menuItem }) {
  return (
    <div className="card MenuItemComponent">
      <div className="card-image">
        <img src={menuItem.imagePath} />
      </div>
      <div className="card-content">
        <h5 className="card-title">
          {menuItem.name || 'N/A'}
        </h5>
        <p>
          {menuItem.price ? `$${menuItem.price.toFixed(2)}` : 'N/A'}
        </p>
      </div>
      <div className="card-action">
        <a href="#">ADD TO ORDER</a>
      </div>
    </div>
  );
}
