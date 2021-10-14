import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

export default function ReactPortal() {
  const [show, setShow] = useState(false);

  function showModal() {
    console.log(show);
    setShow(true);
  }
  function onHide() {
    console.log(show);
    setShow(false);
  }

  return (
    <div>
      <button onClick={showModal}>Show Modal</button>
      <ErrorModal onHide={onHide} show={show} />
    </div>
  );
}
