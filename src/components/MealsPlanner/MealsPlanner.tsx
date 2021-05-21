import React from 'react'
import './MealsPlanner.scss';
import { useAppSelector } from '../../store/storeHooks';
import { useSelector } from "react-redux";
import { sumOfWeekIngredients, currentFridge } from '../../store/selectors/weekSelector';
import NavbarMenu from '../NavbarMenu/NavbarMenu';
import Day from '../Day/Day';
import Fridge from '../Fridge/Fridge';
import { Row, Col } from 'react-bootstrap';
import { weekDaysDict } from '../../utils/dateUtils';

export default function MealsPlanner() {
  const week = useAppSelector((state) => state.week.value);
  const sumOfWeekIngr = useSelector(sumOfWeekIngredients);
  const currentFrid = useSelector(currentFridge);
  console.log(week);
  console.log(sumOfWeekIngr);
  console.log(currentFrid);

  return (
    <div>
      {week &&
        <>
        <NavbarMenu />
        <div className="week-container">
          <Row>
            { weekDaysDict.map( (day, index) => 
              <Col key={`day${index}`}><Day index={index} dayName={day} /></Col>
            )}
          </Row>
          <Row>
            <Fridge />
          </Row>
        </div>
        </>
      }
    </div>
  )
}
