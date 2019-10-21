import React from 'react';
import Register from './components/Register/Register';
import {Switch, Route} from 'react-router-dom';
import './styles/global.scss';
import NavBar from './components/NavBar/NavBar';
import Dashboard from './components/Dashboard/Dashboard';
import { EmployeeTable, SnackTable} from './components';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <h2>Nothing to see here..</h2>
        </Route>


        <Route path="/users">
          <Dashboard>
            <EmployeeTable />
          </Dashboard>
        </Route>

        <Route path="/snacks">
          <Dashboard>
            <SnackTable />
          </Dashboard>
        </Route>

        <Route path='/register'>
            {/* testing route */}
            <Register />
          </Route>
      </Switch>
    </div>
  );
}

export default App;
