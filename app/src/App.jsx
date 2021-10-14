import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  // run after a pause of 500ms
  useEffect(() => {
    // runs on name changes
    const timeout = setTimeout(() => {
      console.log("Name changed");
    }, 500);

    // cleaning code
    return () => {
      clearTimeout(timeout);
      console.log("Cleaning Before Run Again");
    };
  }, [name]);

  // runs on app component load . only once on empty []
  useEffect(() => {
    const loginInfo = localStorage.getItem("isLoggedIn");
    if (loginInfo) {
      setIsLoggedIn(true);
    }
  }, []);

  // runs when isLoggedin State change.
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    setIsLoggedIn(false);
  };

  // const loginHandler = () => {
  //   localStorage.setItem("isLoggedIn", true);
  //   setIsLoggedIn(true);
  // };
  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn", true);
  //   setIsLoggedIn(false);
  // };

  const handleChange = (event) => {
    const value = event.target.value;
    setName(value);
  };

  return (
    <React.Fragment>
      <h1>App js</h1>

      <div>
        <input
          onChange={handleChange}
          type="text"
          placeholder="type Something"
        />

        <p>You Typed: {name}</p>
      </div>

      <div className="buttons">
        <button onClick={loginHandler}>Login</button>
        <button onClick={logoutHandler}>Logout</button>
      </div>

      {isLoggedIn && <h4 className="message">User Logged In </h4>}
      {!isLoggedIn && <h4 className="message">User Not Logged In </h4>}
    </React.Fragment>
  );
}

export default App;
