import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Signup from 'domain/user/components/Signup';
import MealsPlanner from './pages/MealsPlanner/MealsPlanner';
import Login from 'domain/user/components/Login'
import PrivateRoute from 'domain/user/components/PrivateRoute';
import { useInitUser } from 'domain/user/hooks/useInitUser';
import { useAppSelector } from './store/storeHooks';

function App() {
  const [loading, setLoading] = useState(true)
  useInitUser(setLoading);

  const user = useAppSelector((state) => state.user.value);

  return (
    <div className="App">
      {
        !loading && 
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={MealsPlanner}/>
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </Router>
      }
    </div>
  );
}

export default App;
