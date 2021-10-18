import React from "react";
import CartIcon from "../Icons/CartIcon";
import classes from "./HeaderCartButton.module.css";
const { Icon, Text, Badge, Button } = classes;
export default function HeaderCartButton() {
  return (
    <button className={Button}>
      <span className={Icon}>
        <CartIcon />
      </span>
      <span className={Text}>Your Cart</span>
      <span className={Badge}>3</span>
    </button>
  );
}
