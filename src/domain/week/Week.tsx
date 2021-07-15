import React, { useState } from 'react'
import { useAppSelector } from 'application/store/storeHooks';
import { useSelector } from "react-redux";
import { sumOfWeekIngredients, currentFridge } from './selectors/weekSelector';
import { useInitWeek } from './hooks/useInitWeek';
import Day from 'domain/week/components/Day/Day';
import Fridge from './components/Fridge/Fridge';
import { Row, Col } from 'react-bootstrap';
import { weekDaysDict } from 'utils/dateUtils';

export default function Week() {
  const [loading, setLoading] = useState(true)
  useInitWeek(setLoading);
  const week = useAppSelector((state) => state.week.value);
  const sumOfWeekIngr = useSelector(sumOfWeekIngredients);
  const currentFrid = useSelector(currentFridge);
  console.log(week);
  console.log(sumOfWeekIngr);
  console.log(currentFrid);

  return (
    <div>
      {week && !loading &&
<>
          <Row>
            { weekDaysDict.map( (day, index) => 
              <Col key={`day${index}`}><Day index={index} dayName={day} /></Col>
            )}
          </Row>
          <Row>
            <Fridge />
          </Row>
</>
      }
    </div>
  )
}
