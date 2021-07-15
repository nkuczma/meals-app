import { WeekType, MapOfShortIngredients } from '../../domain/week/weekTypes';

const fridge: MapOfShortIngredients = new Map([
  [595040, {id: 595040, amount: 1000}]
])

export const mockWeek: WeekType = {
  id: '0001',
  meals: [
    {
      mealId: '0',
      ingredients: [{id: 595040, amount: 50}, {id: 1658694, amount: 10}, {id: 1100885, amount: 5}],
      day: 0,
      position: 1
    },
    {
      mealId: '1',
      ingredients: [{id: 1100957, amount: 50}, {id: 1658694, amount: 25}, {id: 1049767, amount: 5}],
      day: 1,
      position: 0
    },
    {
      mealId: '2',
      ingredients: [{id: 1539901, amount: 100}, {id: 1103593, amount: 150}, {id: 1585771, amount: 5}],
      day: 4,
      position: 0
    }
  ],
  fridge: fridge
}

