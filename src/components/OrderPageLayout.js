import React from 'react';

export default function OrderPageLayout(props) {
  return (
    <div className="OrderPageLayout">
      <header>
        <nav>
          <div className="nav-wrapper indigo">
            <a href="index.html" className="brand-logo">
              Galvanize Delivers
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#!">Order Delivery</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div class="container">
        <div class="section">
          <div className="row">
            <div id="menu" className="col s12 m8">
              {<h4 className="indigo-text">Menu</h4>}
              {props.children[0]}
            </div>

            <div className="col s12 m4">
              {props.children[1]}
              {props.children[2]}
            </div>
          </div>
        </div>
      </div>
      <footer className="page-footer indigo">
        <div className="container">
          <div className="row">
            <div className="col s12 m8">
              <h5 className="white-text">Galvanize Delivers</h5>
              <p className="grey-text text-lighten-4">
                Fine Dining, Delivered.
              </p>
            </div>

            <div className="col s12 m4 ">
              <ul>
                <li>
                  <a className="white-text" href="index.html">
                    Home
                  </a>
                </li>
                <li>
                  <a className="white-text" href="#!">
                    Order Delivery
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright indigo darken-4">
          <div className="container">2017 Galvanize Delivers</div>
        </div>
      </footer>
    </div>
  );
}

// <form id="form" class="col s12 m12">
