import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({path, children, redirect, requiresAdmin=false, exact=false, user}) =>{
    const loggedIn = localStorage.getItem('snack-token');

    let valid = null;

    if(requiresAdmin){
        if(user.admin){
            valid = true;
        }else{
            valid = false;
        }
    }else{
        valid = true;
    }


    if(loggedIn && valid)
    {
        return(<Route path={path} >
            {children && children}
        </Route>);
    }else{
        return (<Redirect to={redirect} />);
    }
}


const mapStateToProps = state =>{
    return{
        user: state.dashboardReducer.user,
    };
};

export default connect(mapStateToProps, {})(PrivateRoute);