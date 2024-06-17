import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import ReactDOM from "react-dom/client";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} />
        <p>SHOPPER</p>
      </div>
      <div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("Shop");
            }}
          >
            Shop
            {menu == "Shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Men");
            }}
          >
            Men
            {menu == "Men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Women");
            }}
          >
            Women
            {menu == "Women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
            }}
          >
            Kids
            {menu == "Kids" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} />
      </div>
      <div className="nav-cart-count">0</div>
    </div>
  );
};

export default Navbar;
