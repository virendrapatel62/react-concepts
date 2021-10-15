import React from "react";
import classes from "./Header.module.css";

export default function Header() {
  return (
    <div className={classes.Nav}>
      <a className={classes.NavItem}>
        <h4>Navbar</h4>
      </a>
      <div className={classes.Ul}>
        <div className={classes.NavItem}>
          <a href="/home">Home</a>
        </div>
        <div className={classes.NavItem}>Login</div>
        <div className={classes.NavItem}>Meals</div>
      </div>
    </div>
  );
}
