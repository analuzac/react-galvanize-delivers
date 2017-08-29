import React from 'react';

import OrderPageLayout from './OrderPageLayout';
import MenuComponent from './MenuComponent';
import OrderTableComponent from './OrderTableComponent';
import OrderFormComponent from './OrderFormComponent';
import OrderSuccessMessageComponent from './OrderSuccessMessageComponent';

export default function OrderPage({
  menuItems,
  orderItems,
  customerInfo,
  onAddItem,
  onSubmit,
  onClose
}) {
  return (
    <div className="OrderPage">
      <OrderPageLayout>
        <MenuComponent menuItems={menuItems} onAddItem={onAddItem} />
        <OrderTableComponent orderItems={orderItems} />

        {customerInfo
          ? <OrderSuccessMessageComponent
              customerInfo={customerInfo}
              onClose={onClose}
            />
          : <OrderFormComponent onSubmit={onSubmit} />}
      </OrderPageLayout>
    </div>
  );
}
