import React, { useRef } from "react";

export default function Form() {
  const nameRef = useRef();
  const passwordRef = useRef();

  console.log({ nameRef, passwordRef });

  return (
    <div>
      <input type="text" ref={nameRef} />
      <br></br>
      <br></br>
      <input type="password" ref={passwordRef} />
    </div>
  );
}
