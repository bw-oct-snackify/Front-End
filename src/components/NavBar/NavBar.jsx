import React, {useState} from 'react';
import {AppBar, Toolbar, IconButton, Typography, Avatar, Menu, MenuItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import navBackground from '../../assets/images/snackbox.png';
import { Link } from "react-router-dom";
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

const NavBar = props =>{

    const CompanyName = 'Lambda School';
    const userAvatar = 'https://avatars3.githubusercontent.com/u/13228579?s=460&v=4';
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
      };

    return(
        <div className={classes.root}>
            <AppBar className={classes.appbar} position='static'>
                <Toolbar className={classes.toolbar}>
                    <h2 className={navbar.company}>{CompanyName}</h2>                  
                    <div className={navbar.navlist}>
                        <div className={navbar.main}>
                            <Link to="/snacks">Snacks</Link>     
                            <Link to="/users">Users</Link> 
                        </div>     
                        <div className={navbar.secondary}>
                            <Link to ="/myaccount">My Account</Link>

                            <Avatar onClick={handleClick} src={userAvatar}  className={classes.avatar}/> 

                            <Menu id='simple-menu' anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My Snacks</MenuItem>
                                <MenuItem onClick={handleClose}>Logout</MenuItem>
                            </Menu>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default NavBar;