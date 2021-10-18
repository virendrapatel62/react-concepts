import { Fragment } from "react";
import DummyComponent from "./components/DummyComponent";
import Header from "./components/Layout/Header";
import AvailableMeals from "./components/Meals/AvailableMeals";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <Fragment>
      <Header></Header>
      <main className="container">
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
