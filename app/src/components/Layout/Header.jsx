import React, { Fragment } from "react";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header() {
  return (
    <div className={classes.Nav}>
      <a className={classes.NavItem}>
        <h4>React Meals</h4>
      </a>
      <div className={classes.Ul}>
        <div className={classes.NavItem}>
          <HeaderCartButton />
        </div>
      </div>
    </div>
  );
}
