import React, { useReducer } from "react";
const initialState = {
  dispatchStudent: (type) => {},
  students: [],
};
const StudentContext = React.createContext(initialState);

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

function StudentProvider(props) {
  const [studentState, dispatchStudent] = useReducer(studentReducer, []);

  return (
    <StudentContext.Provider
      value={{ students: studentState, dispatchStudent }}
    >
      {props.children}
    </StudentContext.Provider>
  );
}

export { StudentProvider };
export default StudentContext;
