import React, { Component } from 'react';
class Header extends Component {
  render(){
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
        <li className="nav-item">
            <h1>Drive-Thru</h1>
        </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
