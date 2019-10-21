import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './styles/global.scss';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import { EmployeeTable, SnackManagement, Register, Login, Checkout} from './components';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import AccountSettings from './components/Dashboard/AccountSettings/AccountSettings';


function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>

        <PrivateRoute access={true} allowedUser={false} path='/cp/users' redirect='/login'>
          <Dashboard>
            <EmployeeTable />
          </Dashboard>
        </PrivateRoute>

        <PrivateRoute access={true} allowedUser={false} path="/cp/snacks" redirect="/login">
          <Dashboard>
            <SnackManagement />
          </Dashboard>
        </PrivateRoute>

        <PrivateRoute access={true} allowedUser={true} path="/settings" redirect="/login">
          <Dashboard>
            <AccountSettings />
          </Dashboard>
        </PrivateRoute>

        <PrivateRoute access={true} allowedUser={true} path='/cp/checkout' redirect='/login'>
          <Checkout />
        </PrivateRoute>
        
        <Route exact path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>


      </Switch>
    </div>
  );
}

export default App;
