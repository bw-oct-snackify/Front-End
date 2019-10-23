import React, {useEffect} from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/global.scss';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import { SnackManagement, Register, Login, Checkout } from './components';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AccountSettings from './components/Dashboard/AccountSettings/AccountSettings';
import UserManagement from './components/Dashboard/UserManagement/UserManagement';
import ViewAllSnacks from './components/Dashboard/SnackManagement/ViewAllSnacks/ViewAllSnacks';

const App = () =>{
  
  const loggedIn = localStorage.getItem('snack-token');
  
  useEffect(() =>{
    if(loggedIn)
  },[])
  
  return (  

    <div className="App">
      <NavBar />
      <Switch>

        <PrivateRoute requiresAdmin path='/cp/users' redirect='/login'>
          <Dashboard>
            <UserManagement />             
          </Dashboard>
        </PrivateRoute>

        <PrivateRoute requiresAdmin path="/cp/snacks" redirect="/login">
          <Dashboard>
            <SnackManagement />           
          </Dashboard>
        </PrivateRoute>

        <PrivateRoute path="/settings" redirect="/login">
          <Dashboard>
            <AccountSettings />
          </Dashboard>
        </PrivateRoute>

        <PrivateRoute path="/snacks" redirect="/login">
          <Dashboard>
            <ViewAllSnacks />
          </Dashboard>
        </PrivateRoute>

        <PrivateRoute requiresAdmin path='/cp/checkout' redirect='/login'>
          <Checkout />
        </PrivateRoute>


        <PrivateRoute exact path='/' redirect='/login'>
          <div>
            <h2>Logged in user, and on the dashboard.</h2>
            <p>Welcome to the user dashboard, where stuff will exist.</p>
          </div>
        </PrivateRoute>

        <Route exact path='/login/'>

        
          <Login />
        </Route>

        <Route path='/register/'>
          <Register />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
