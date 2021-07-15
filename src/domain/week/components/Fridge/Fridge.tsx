import React from 'react'
import './Fridge.scss';
import { useAppSelector } from 'application/store/storeHooks';
import { useSelector } from "react-redux";
import { currentFridge } from '../../selectors/weekSelector';
import { getFoodDataById } from '../../api/foodDataApi';

export default function Fridge() {
  const week = useAppSelector((state) => state.week.value);
  const fridge = week?.fridge;
  const calculatedFridge = useSelector(currentFridge);
  getFoodDataById([595040]);
  return (
    <div>
      <h3>Fridge</h3>
      <div className="fridge">
        {calculatedFridge.map((ingredient, i) => {
          let ingredientInitialAmount = fridge.get(ingredient.id)?.amount;
          return (
          <div className="fridge__item" key={`fridge-item${i}`}>
            <p>{ingredient.id}</p>
            <p>{ingredient.amount}/{ingredientInitialAmount}</p>
          </div>)
        })}
      </div>
    </div>
  )
}
