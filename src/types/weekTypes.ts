export type WeekType = {
  id: string,
  meals: MealsType[],
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
  description: string,
  servingSize: number,
  servingSizeUnit: string,
  householdServingFullText: string | null,
  //foodNutrients: [] //nutritiens 
}

export type FridgeType = Map<string, IngredientShortType>;

export type IngredienstFullListType = Map<string, IngredientFullType>;

