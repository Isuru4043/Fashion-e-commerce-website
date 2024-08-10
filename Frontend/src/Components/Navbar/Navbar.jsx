import React, { useState } from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import ReactDOM from "react-dom/client";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalItems } = React.useContext(ShopContext);

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
            <Link style={{ textDecoration: "none" }} to="/">
              Shop
            </Link>

            {menu == "Shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Men");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/mens">
              Men
            </Link>

            {menu == "Men" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Women");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/womens">
              Women
            </Link>

            {menu == "Women" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("Kids");
            }}
          >
            <Link style={{ textDecoration: "none" }} to="/kids">
              Kids
            </Link>

            {menu == "Kids" ? <hr /> : <></>}
          </li>
        </ul>
      </div>
      <div className="nav-login-cart">
        <Link style={{ textDecoration: "none" }} to="/login">
          <button>Login</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/cart">
          <img src={cart_icon} />
        </Link>
        <div className="nav-cart-count">{getTotalItems()}</div>
      </div>
    </div>
  );
};

export default Navbar;
