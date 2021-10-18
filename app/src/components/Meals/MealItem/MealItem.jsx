import React from "react";
import classes from "./MealItem.module.css";

export default function MealItem({ meal }) {
  const { description, name, price, image } = meal;
  return (
    <div className={classes.item}>
      <img className={classes.image} src={image} />
      <div className={classes.content}>
        <h3 className={classes.name}>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{`$${price}`}</div>
      </div>
    </div>
  );
}
