import React, { Fragment, useEffect, useState } from "react";
import classes from "./ErrorModal.module.css";

import ReactDom from "react-dom";

const Modalcontent = ({ show, onHide, Show, Hide }) => {
  return (
    <Fragment>
      <h1 className={classes.Heading}>Error Model</h1>
      <p className={classes.Content}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci totam
        expedita error voluptatum explicabo aliquid aut odit ipsum illum quasi
        dolorem perferendis quam ab facilis aspernatur, praesentium dolorum
        sequi dicta?
      </p>
      <button onClick={onHide} className={classes.Button}>
        Close Modal
      </button>
    </Fragment>
  );
};

export default function ErrorModal(props) {
  const { show, onHide } = props;
  const { Show, Hide } = classes;

  //   moved modal to the model-root div on top of the page.
  return ReactDom.createPortal(
    <div className={`${classes.Modal} ${show ? Show : Hide}`}>
      <Modalcontent {...{ show, onHide, Show, Hide }} />
    </div>,
    document.getElementById("modal-root")
  );
}
