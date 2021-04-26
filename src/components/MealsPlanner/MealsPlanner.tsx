import React from 'react'
import { useAppSelector } from '../../store/storeHooks';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { logout } from '../../api/userApi';

export default function MealsPlanner() {
  const user = useAppSelector((state: any) => state.user.value);
  const history = useHistory();

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
