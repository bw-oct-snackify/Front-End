import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

const PrivateRoute = ({access, allowedUser, path, children, redirect, user}) =>{
    const loggedInRole = user.role;

    if((access && allowedUser) || loggedInRole === 'admin'){
        return(
            <Route path={path} >
                {children && children}
            </Route>
        );
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