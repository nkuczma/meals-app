import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Signup from './components/Credentials/Signup';
import MealsPlanner from './components/MealsPlanner/MealsPlanner';
import Login from './components/Credentials/Login'
import PrivateRoute from './components/Credentials/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/" component={MealsPlanner}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
