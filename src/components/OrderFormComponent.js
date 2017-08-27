import React from 'react';

export default function OrderFormComponent({ customerInfo }) {
  return (
    <form id="form" className="col s12 m12">
      <div className="row">
        <div className="input-field col s12 m12">
          <i className="material-icons prefix indigo-text">account_circle</i>
          <input
            value={customerInfo.name}
            id="name"
            type="text"
            className="validate"
            required
          />
          <label for="name">Name</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12 m12">
          <i className="material-icons prefix indigo-text">phone</i>
          <input
            value={customerInfo.phone}
            id="phone"
            type="tel"
            className="validate"
            required
          />
          <label for="phone">Phone number</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field col s12 m12">
          <i className="material-icons prefix indigo-text">home</i>
          <input
            value={customerInfo.address}
            id="address"
            type="text"
            className="validate"
            required
          />
          <label for="address">Address</label>
        </div>
      </div>

      <div className="row center">
        <a
          id="submit-button"
          type="submit"
          name="action"
          className="btn-large waves-effect waves-light indigo lighten-1">
          PLACE ORDER
        </a>
      </div>
    </form>
  );
}
