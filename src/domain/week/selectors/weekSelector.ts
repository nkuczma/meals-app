import { createSelector } from "@reduxjs/toolkit";
import type { RootState} from '../../../application/store/store';
import { WeekType, MapOfShortIngredients } from '../weekTypes';

const weekSelector = (state: RootState) => state.week.value;

const getSumOfWeekIngredients = (weekSelector: WeekType) => {
  let mapOfSummedIngredients : MapOfShortIngredients = new Map();
  if(weekSelector.meals) {
    weekSelector.meals.map((meal) => {
      meal.ingredients.map(ingredient => {
        let currentAmount = mapOfSummedIngredients.has(ingredient.id)? mapOfSummedIngredients.get(ingredient.id)!.amount : 0;
        let newAmount = currentAmount + ingredient.amount;
        mapOfSummedIngredients.set(ingredient.id, {id: ingredient.id, amount: newAmount})
      })
    });
  }
  return mapOfSummedIngredients;
};

const calculateCurrentFridge = (weekSelector: WeekType, sumOfWeekIngredients: MapOfShortIngredients) => {
  let fridge = weekSelector.fridge;
  let currentFridge : MapOfShortIngredients = new Map();
  if(fridge) {
    fridge.forEach( (ingredient, id) => {
      let amountUsed = sumOfWeekIngredients.has(id)? sumOfWeekIngredients.get(id)!.amount: 0;
      let newAmount = ingredient.amount - amountUsed;
      if(newAmount < 0) newAmount = 0;
      currentFridge.set(id, {id: id, amount: newAmount});
    });
  }
  return Array.from(currentFridge, ([id, ingredient]) => (ingredient));
}

export const sumOfWeekIngredients = createSelector(
  weekSelector,
  getSumOfWeekIngredients
);

export const currentFridge = createSelector(
  weekSelector,
  sumOfWeekIngredients,
  calculateCurrentFridge
);
