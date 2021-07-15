export type WeekType = {
  id: string,
  meals: MealsType[],
  fridge: MapOfShortIngredients
}

export type MealsType = {
  mealId: string,
  ingredients: IngredientShortType[],
  day: number,
  position: number
}


export type IngredientShortType = {
  id: number,
  amount: number
}

export type IngredientFullType = {
  fdcId: number;
  description: string,
  servingSize: number,
  servingSizeUnit: string,
  householdServingFullText: string | null,
  //foodNutrients: [] //nutritiens 
}

export type IngredienstFullListType = Map<number, IngredientFullType>;

export type MapOfShortIngredients = Map<number, IngredientShortType>;