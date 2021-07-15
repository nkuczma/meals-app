import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { logout } from '../api/userApi';
import { useHistory } from 'react-router-dom';
import { useAppSelector } from 'application/store/storeHooks';

export default function NavbarMenu() {
  const history = useHistory();
  const user = useAppSelector((state: any) => state.user.value);

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
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Meals Planner</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Nav>
          <Navbar.Text className=" mr-sm-4">{user?.email}</Navbar.Text>
          <Button className=" mr-sm-4" onClick={handleLogout} color="primary">Log out</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
