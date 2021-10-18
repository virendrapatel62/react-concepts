import React, { Fragment } from "react";
import Card from "../UI/Card";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

export default function Meals() {
  return (
    <Fragment>
      <Card>
        <MealsSummary></MealsSummary>
      </Card>
      <AvailableMeals />
    </Fragment>
  );
}
