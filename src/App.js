import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getUserInfo } from "./store/actions/dashboardActions";
import "./styles/global.scss";
import NavBar from "./components/NavBar/NavBar";
import Dashboard from "./components/Dashboard/Dashboard";
import { SnackManagement, Register, Login, Checkout } from "./components";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import AccountSettings from "./components/Dashboard/AccountSettings/AccountSettings";
import UserManagement from "./components/Dashboard/UserManagement/UserManagement";
import ViewAllSnacks from "./components/Dashboard/SnackManagement/ViewAllSnacks/ViewAllSnacks";
import SelectedSnacks from "./components/Dashboard/SnackManagement/SelectedSnacks/SelectedSnacks"
import SuggestedSnacks from "./components/Dashboard/SnackManagement/SuggestedSnacks/SuggestedSnacks";
const App = ({ getUserInfo, loggedInStatus }) => {

  const loggedIn = localStorage.getItem("snack-token");

  useEffect(() => {
    if (loggedIn) {
      getUserInfo(loggedIn);
    }
  }, [loggedIn, getUserInfo]);


  if(!loggedInStatus && loggedIn){

  }


  return (
    <div className="App">
      <NavBar />
      <Switch>
        <PrivateRoute requiresAdmin path="/cp/users" redirect="/login">
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

        <PrivateRoute path="/selectedsnacks" redirect="/login">

          <Dashboard><SelectedSnacks /></Dashboard>
        </PrivateRoute>

        <PrivateRoute path="/snacks" redirect="/login">
          <Dashboard>
            <ViewAllSnacks />
          </Dashboard>
        </PrivateRoute>

        <PrivateRoute requiresAdmin path="/cp/checkout" redirect="/login">
          <Checkout />
        </PrivateRoute>

        <PrivateRoute path="/suggested" redirect="/login">
          <Dashboard>

             <SuggestedSnacks /> 

          </Dashboard>
        </PrivateRoute>

        <PrivateRoute requiresAdmin path="/cp/checkout" redirect="/login">
          <Checkout />
        </PrivateRoute>

        <PrivateRoute exact path="/" redirect="/login">
          <Redirect to="/snacks" />
        </PrivateRoute>

        <Route exact path="/login/">
          <Login />
        </Route>

        <Route path="/register/" component={Register} />
      </Switch>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loggedInStatus: state.dashboardReducer.loggedIn,  
  };
};

export default connect(
  mapStateToProps,
  { getUserInfo }
)(App);
