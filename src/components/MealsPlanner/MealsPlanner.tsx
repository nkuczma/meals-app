import React from 'react'
import { useAuth } from '../../contexts/AuthContext';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';

export default function MealsPlanner() {
  const { currentUser, logout } = useAuth();
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
      <span>Email: {currentUser?.email}</span>
    </div>
  )
}
