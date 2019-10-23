import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {Card, Grid, Typography, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide} from '@material-ui/core';
import { purple } from '@material-ui/core/colors';
import UserTable  from './UserTable/UserTable';
import { connect } from "react-redux";
import { deleteUser } from '../../../store/actions/dashboardActions';
import Snackifycat from "../../../assets/images/Snackifycat.png";

import { Avatar } from '@material-ui/core';

const ColorButton = withStyles(theme => ({
    root: {
      color: theme.palette.getContrastText(purple[500]),
      backgroundColor: purple[500],
      '&:hover': {
        backgroundColor: purple[700],
      },
    },
  }))(Button);

const useStyles = makeStyles(theme => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        width:"400px"  
    },   
    card: {
        padding:"10px",
        width: "250px",        
    },
    Snackifycat: {
        height:"75%",
        width: "250px",  
    },
    userError:{
        color: "black",
        
        textAlign: "center",
        height: "100%",   
      
    },
    list: {
        textDecoration: "none",
        color: "black",
        display: "flex",
        margin: "10px",
        "&:hover": {
            backgroundColor: "lightgrey",
            height: "30px"
        },
        borderRadius: "10px"
    },
    root: {
        flexGrow: 1,
        display: "flex",
        justifyContent:"center"
        
    },
    paper: {
        width: '100%',
        margin: theme.spacing(1),
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    btn: {
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
        width: '100%',
        borderRadius: "20px;",
    },
    sideGrid: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    notice: {
        display: "flex",
        justifyContent:"center",
        textAlign: 'center',
    },

    errorTitle:{
        fontSize: '2rem',
    },
}));

const UserManagement = ({users, deleteUser}) => {
    const classes = useStyles();
    const [confOpen, setConfOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState({id:null, name: ''});

    const handleDelete = (id, name) =>{
        setUserToDelete({id:id, name: name});
        setConfOpen(true);
    };

    const handleDeleteUser = () =>{
        deleteUser(userToDelete.id);
        setUserToDelete({id:null, name: ''});
        setConfOpen(false);
    };

    const handleCancel = () =>{
        setConfOpen(false);
    };    

    return (
        
        <div className={classes.root}>
            <Grid className={classes.container} container spacing={1}>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <Typography variant="h6" className={classes.title}>
                            Registered Users: {users.length}
                        </Typography>



                        <ColorButton variant="contained" color="primary" className={classes.margin}>
                            Schedule delivery!
                        </ColorButton>

                    </Card>
                </Grid>
            </Grid>


            {users.length > 0 && <UserTable handleDelete={handleDelete} />}
            {users.length < 1 && (<Grid className={classes.notice} item xs={6}>
                <Card className={classes.userError}>
                    <div className={classes.errorTitle}>No users exist</div>                    
                    <Avatar className={classes.Snackifycat} src={Snackifycat} alt="cat-pic"></Avatar>
                    <p>--Snackify team</p>
                </Card>
                </Grid>)}

            <Dialog open={confOpen} keepMounted onClose={handleCancel} aria-labelledby="alert-dialog-slide-title" aria-describedby="alert-dialog-slide-description">
                <DialogTitle id="alert-dialog-slide-title">{'Delete user from the company.'}</DialogTitle>
                <DialogContent>
                    <DialogContentText id='alert-dialog-slide-title'>
                        {`Are you sure you would like to delete ${userToDelete.name} from the company list?`}
                    </DialogContentText>
                    <DialogActions>
                        <Button onClick={handleCancel} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleDeleteUser} color="primary">
                            Delete
                        </Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>

    );
}

const mapStateToProps = state => {
    return {
        users: state.dashboardReducer.users,
            
    };
};
export default connect(mapStateToProps,{deleteUser})(UserManagement);
