import axios from 'axios';
import { IngredientFullType } from '../weekTypes';

const foodDataApiKey = process.env.REACT_APP_FOODDATA_API_KEY;

export function getFoodDataById(listOfIds: number[]) {
  let getFoodListUrl = `https://api.nal.usda.gov/fdc/v1/foods?api_key=${foodDataApiKey}`;
  listOfIds.map((id) => {
    getFoodListUrl += `&fdcIds=${id}`;
  });
  return axios.get<IngredientFullType[]>(getFoodListUrl)
    .then((res) => res.data)
    .then((data) => {
      const ingredientsList = data;
      let usedIngredientsMap = new Map([]);
      ingredientsList.map((ingredient) => {
        usedIngredientsMap.set(ingredient.fdcId, ingredient)
      })
      console.log(usedIngredientsMap)
      return usedIngredientsMap;
    });
}