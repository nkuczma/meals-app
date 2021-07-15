import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { useAppSelector } from 'application/store/storeHooks';

export default function PrivateRoute({component, ...rest}: any) {
  const currentUser = useAppSelector((state: any) => state.user.value);
  const routeComponent = (props: any) => (
    currentUser? React.createElement(component, props) : <Redirect to="/login" />
  )
  return (
    <Route {...rest} render={routeComponent} />
  )
}
