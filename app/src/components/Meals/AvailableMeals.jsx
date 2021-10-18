import React from "react";
import { generateMealData } from "../../utils/meals";

import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = generateMealData(20);

export default function AvailableMeals() {
  const mealList = DUMMY_MEALS.map((meal) => <MealItem meal={meal}></MealItem>);
  return (
    <Card className="mt-4">
      <ul>{mealList}</ul>
    </Card>
  );
}
