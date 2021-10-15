import logo from "./logo.svg";
import "./App.css";
import { Fragment, useReducer, useRef, useState } from "react";

const studentReducer = (state = [], action) => {
  console.log({ state, action });
  const { type, value } = action;

  switch (type) {
    case "CREATE_STUDENT":
      return [...state, value];
    case "DELETE_STUDENT": {
      const newState = [...state];
      const index = newState.findIndex((student) => student === value);
      newState.splice(index, 1);
      return newState;
    }
    default:
      return state;
  }
};

function App() {
  const [studentState, dispatchStudent] = useReducer(studentReducer, []);
  const nameInputRef = useRef("");

  const saveStudent = (event) => {
    event.preventDefault();
    dispatchStudent({
      type: "CREATE_STUDENT",
      value: nameInputRef.current.value,
    });

    nameInputRef.current.value = "";
  };

  return (
    <Fragment>
      <div>
        <form onSubmit={saveStudent}>
          <input type="text" name="name" ref={nameInputRef} />

          <br />
          <br />
          <button style={style.saveButton} type="submit">
            Save Student
          </button>

          <hr />
        </form>

        <div class="list-group">
          {studentState.map((student, index) => (
            <p key={index} style={style.p}>
              <span style={style.span}>
                {index + 1}: {student}
              </span>{" "}
              <button
                onClick={() => {
                  dispatchStudent({ type: "DELETE_STUDENT", value: student });
                }}
                style={style.deleteButton}
              >
                Delete
              </button>
            </p>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default App;

const style = {
  deleteButton: {
    backgroundColor: "tomato",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  saveButton: {
    backgroundColor: "dodgerblue",
    border: "1px solid black",
    padding: "10px",
    cursor: "pointer",
  },
  p: {
    display: "flex",
    flex: 1,
  },
  span: {
    width: 200,
  },
};
