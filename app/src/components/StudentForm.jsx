import React, { useContext, useRef } from "react";
import StudentContext from "../context/student-context";

export default function StudentForm() {
  const { dispatchStudent } = useContext(StudentContext);
  const inputRef = useRef("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatchStudent({ type: "CREATE_STUDENT", value: inputRef.current.value });
    inputRef.current.value = "";
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input ref={inputRef} type="text" name="name" />
        <br />
        <br />
        <button className="btn btn-success" type="submit">
          Save Student
        </button>
        <hr />
      </form>
    </div>
  );
}
