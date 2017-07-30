import React, { Component } from 'react';
import config from '../../config';

class Header extends Component {
  render(){
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
        <li className="nav-item">
            <h3>{config.restaraunt_name || "Drive-Thru"}</h3>
        </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
