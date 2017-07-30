import React, { Component } from 'react';
class Header extends Component {
  render(){
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
        <li className="nav-item">
            <h3>The Slow Roll Drive Thru</h3>
        </li>
        </ul>
      </nav>
    );
  }
}

export default Header;
