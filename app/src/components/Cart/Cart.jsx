import React from "react";
import { generateMealData } from "../../utils/meals";
import classes from "./Cart.module.css";

export default function Cart() {
  const cartItems = (
    <ul>
      {generateMealData(5)
        .map((item) => ({
          ...item,
          amount: ~Math.random() * 10,
        }))
        .map((item) => (
          <li>{item.name}</li>
        ))}
    </ul>
  );

  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Ammount</span>
        <span>$ 78.89</span>
      </div>
      <div className={classes.actions}></div>
    </div>
  );
}
