import React from 'react';
import Meal from '../Meal/Meal';

interface DayProps {
  index: number;
  dayName: string;
}

export default function Day({index, dayName}: DayProps) {

  return (
    <div>
      <h3>{dayName}</h3>
      {Array.from({ length: 3 }).map((v, i) => 
        <Meal dayIndex={index} dayPosition={i} key={`meal${dayName}${i}`}/>
      )}
    </div>
  )
}
