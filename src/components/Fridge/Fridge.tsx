import React from 'react'
import './Fridge.scss';
import { useAppSelector } from '../../store/storeHooks';
import { useSelector } from "react-redux";
import { currentFridge } from '../../store/selectors/weekSelector';

export default function Fridge() {
  const week = useAppSelector((state) => state.week.value);
  const fridge = week?.fridge;
  const calculatedFridge = useSelector(currentFridge);

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
