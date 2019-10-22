import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { purple } from '@material-ui/core/colors';
import { EmployeeTable } from '../..';

const useStyles = makeStyles(theme => ({
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    container: {
        width:"400px"  
    },   
    card: {
      width:"200px"  
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
    }
}));

const UserManagement = () => {
    const classes = useStyles();

    return (
        
        <div className={classes.root}>
            <Grid className={classes.container} container spacing={1}>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <Typography variant="h6" className={classes.title}>
                            Users Left:
                            </Typography>                        
                    </Card>
                </Grid>                    
            </Grid>     
            <EmployeeTable/>
        </div>
       
       

    );
}

export default UserManagement;
