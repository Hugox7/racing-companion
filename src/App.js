import React from 'react';
import { Switch } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import PublicRoute from './components/PublicRoute';

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';

import './app.css';

class App extends React.Component {

  render() {
    return (
      <div id='app'>
        <Switch>
          <ProtectedRoute 
            component={Home}
            exact path='/'
          />
          <PublicRoute 
            component={Signin}
            path='/signin'
          />
          <PublicRoute 
            component={Signup}
            path='/signup'
          />
        </Switch>
      </div>
    );
  }
  
}

export default App;
