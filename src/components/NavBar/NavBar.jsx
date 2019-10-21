import React from 'react';
import {AppBar, Toolbar, Avatar} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import navBackground from '../../assets/images/snackbox.png';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import navbar from './navbar.module.scss';

const useStyles = makeStyles(theme =>({
    root: {
        flexGrow: 1,
        position:'fixed',
        top:0,
        left:0,
        width: '100%',
    },

    toolbar:{
        minHeight: 60, 
        minWidth: '100%',
        backgroundColor: '#0003',
        backgroundImage: `url(${navBackground})`,
        backgroundSize: '1920px',        
        backgroundRepeat:'no-repeat',
        backgroundPositionX: 'center',
        backgroundPositionY: '-180px',
        backgroundBlendMode: 'multiply',
    },
    title:{
        flexGrow: 1,
        alignSelf: 'flex-end',
    },
    avatar:{
        height: '42px',
        width: '42px',
    },

    appbar:{
        
    },
}));

const NavBar = ({user}) =>{
    const classes = useStyles();

    return(
        <div className={classes.root}>
            <AppBar className={classes.appbar} position='static'>
                <Toolbar className={classes.toolbar}>
                    <h2 className={navbar.company}>{user.company}</h2>                  
                    <div className={navbar.navlist}>
                        <div className={navbar.main}>
                            {user.role === 'admin' && 
                            <>
                                <Link to="/cp/snacks">Manage Snacks</Link>     
                                <Link to="/cp/users">Manage Users</Link> 
                            </>}    
                        </div>     
                        <div className={navbar.secondary}>
                            <Link to='/settings'>{user.name}</Link>
                            <Avatar src={user.image}  className={classes.avatar}/> 
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};


const mapStateToProps = state =>{
    return{
        user: state.dashboardReducer.user,
    };
};

export default connect(mapStateToProps, {})(NavBar);