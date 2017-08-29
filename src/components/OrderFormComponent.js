import React, { Component } from 'react';

export default class OrderFormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBody: true,
      hasValidationErrors: false
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const $form = event.target;
    const name = $form.name.value.trim();
    const phone = $form.phone.value.trim();
    const address = $form.address.value.trim();
    // this.props.onSubmit({ name, phone, address });
    //console.log({ name, phone, address });

    //let regPhone = /(?:\d{3}|\(\d{3}\))([-\/\.])\d{3}\1\d{4}/;
    let regPhone = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

    if (phone.match(regPhone) || name !== null || address !== null) {
      this.props.onSubmit({ name, phone, address });
    } else {
      this.setState({ hasValidationErrors: true });
    }
  };

  render() {
    //console.log(this.state, 'these are the props');
    return (
      <form id="form" className="col s12 m12" onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix indigo-text">account_circle</i>
            <input
              // value={customerInfo.name}
              id="name"
              type="text"
              className="validate"
              placeholder="Name"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix indigo-text">phone</i>
            <input
              // value={customerInfo.phone}
              id="phone"
              type="tel"
              className="validate"
              placeholder="Phone Number"
              required
            />
          </div>
        </div>

        <div className="row">
          <div className="input-field col s12 m12">
            <i className="material-icons prefix indigo-text">home</i>
            <input
              // value={customerInfo.address}
              id="address"
              type="text"
              className="validate"
              placeholder="Address"
              required
            />
          </div>
        </div>

        <div className="row center">
          <button
            id="submit-button"
            type="submit"
            name="action"
            className="btn-large waves-effect waves-light indigo lighten-1">
            PLACE ORDER
          </button>
          {this.state.hasValidationErrors &&
            <p style={styles.errorStyle}>Please submit valid inputs</p>}
        </div>
      </form>
    );
  }
}

const styles = {
  errorStyle: {
    color: 'red',
    fontWeight: 'bold'
  }
};
