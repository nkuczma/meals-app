import React from 'react';
import './Meal.scss';
import { useAppSelector } from '../../store/storeHooks';

interface MealProps {
  dayIndex: number;
  dayPosition: number;
}

export default function Meal({dayIndex, dayPosition}: MealProps) {
  const week = useAppSelector((state) => state.week.value);
  const meal = week?.meals?.filter((meal) => meal.day === dayIndex && meal.position === dayPosition)[0];
  return (
    <div className="meal-item">
      {meal && 
        meal.ingredients.map((ingredient, i) => <div key={`meal${dayIndex}${dayPosition}${i}`}>
          <span>{ingredient.id}</span>
          <span style={{fontWeight: 'bold', marginLeft: '5px'}}>{ingredient.amount}</span>
          </div>)}
    </div>
  )
}
