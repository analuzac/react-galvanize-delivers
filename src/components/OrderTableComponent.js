import React from 'react';

export default function OrderTableComponent({ orderItems }) {
  let subtotal = orderItems.reduce(function(sum, item) {
    return (sum += item.price);
  }, 0);
  let tax = subtotal * 0.1;
  let total = subtotal + tax;

  return (
    <div>
      <h4 className="indigo-text ">Order</h4>
      <table className="striped col s12 m12">
        <thead>
          <tr>
            <th>Item</th>
            <th />
            <th>Price</th>
          </tr>
        </thead>
        <tbody id="tbody">
          {orderItems.map(item =>
            <tr key={item.id}>
              <td>
                {item.name || 'N/A'}
              </td>
              <td />
              <td>
                {item.price ? `$${item.price.toFixed(2)}` : 'N/A'}
              </td>
            </tr>
          )}
        </tbody>
        <tfoot>
          <tr>
            <td />
            <td>Subtotal</td>
            <td id="subtotal">
              {`$${subtotal.toFixed(2)}`}
            </td>
          </tr>
          <tr>
            <td />
            <td>Tax</td>
            <td id="tax">
              {`$${tax.toFixed(2)}`}
            </td>
          </tr>
          <tr>
            <td />
            <td>Total</td>
            <td id="total">
              {`$${total.toFixed(2)}`}
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
