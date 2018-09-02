import React, { Component } from 'react';
import { Link , NavLink} from "react-router-dom";
import classes from './Header.css';
class Header extends Component {
  render() {
    return (
      <div className = "header ">
         <header className = "header_item">
               <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/products">Our Products</NavLink></li>
                        <li><NavLink to="/clients">Our clients</NavLink></li>
                        <li><NavLink to="/AboutUs">About us</NavLink></li>
                    </ul>
                </nav>
          </header>
       </div>
    );
  }
}

export default Header;