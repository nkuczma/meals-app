import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

export default function PrivateRoute({component, ...rest}: any) {
  const {currentUser} = useAuth();
  const routeComponent = (props: any) => (
    currentUser? React.createElement(component, props) : <Redirect to="/login" />
  )
  return (
    <Route {...rest} render={routeComponent} />
  )
}
