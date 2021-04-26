import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Signup from './components/Credentials/Signup';
import MealsPlanner from './components/MealsPlanner/MealsPlanner';
import Login from './components/Credentials/Login'
import PrivateRoute from './components/Credentials/PrivateRoute';
import { useInitPlanner } from './hooks/useInitPlanner';
import { useAppSelector } from './store/storeHooks';

function App() {
  useInitPlanner();
  const user = useAppSelector((state) => state.user.value);
  console.log(user)
  return (
    <div className="App">
      {user &&
        <Router>
            <Switch>
              {
                user &&
                <PrivateRoute exact path="/" component={MealsPlanner}/>
              }
              
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
            </Switch>
        </Router>
      }
    </div>
  );
}

export default App;
