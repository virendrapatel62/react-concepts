import logo from "./logo.svg";
import "./App.css";
import { Fragment, useReducer, useRef, useState } from "react";
import StudentContext, { StudentProvider } from "./context/student-context";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const nameInputRef = useRef("");

  return (
    <StudentProvider>
      <StudentForm />
      <StudentList />
    </StudentProvider>
  );
}

export default App;
