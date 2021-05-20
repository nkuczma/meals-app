import React from 'react'
import { useAppSelector } from '../../store/storeHooks';
import { useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { logout } from '../../api/userApi';
import { sumOfWeekIngredients, currentFridge } from '../../store/selectors/weekSelector';

export default function MealsPlanner() {
  const user = useAppSelector((state: any) => state.user.value);
  const history = useHistory();
  const week = useAppSelector((state) => state.week.value);
  const sumOfWeekIngr = useSelector(sumOfWeekIngredients);
  const currentFrid = useSelector(currentFridge);
  console.log(week);
  console.log(sumOfWeekIngr);
  console.log(currentFrid);

  async function handleLogout() {
    try {
      await logout();
      history.push('/login');
    }
    catch {
      console.log('failed to logout');
    }
  }
  return (
    <div>
      <h1>Planner</h1>
      <Button onClick={handleLogout} color="primary">Log out</Button>
      <span>Email: {user?.email}</span>
    </div>
  )
}
