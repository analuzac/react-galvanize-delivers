import React from 'react';

import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderFormComponent from './OrderFormComponent';

export default function OrderPage({ menuItems, orderItems, customerInfo }) {
  return (
    <div className="OrderPage">
      <OrderPageLayout>
        <MenuComponent menuItems={menuItems} />
        <OrderTableComponent orderItems={orderItems} />
        <OrderFormComponent customerInfo={customerInfo} />
      </OrderPageLayout>
    </div>
  );
}
