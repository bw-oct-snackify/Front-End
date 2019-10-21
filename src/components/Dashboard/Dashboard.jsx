import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import SnackTable from './SnackTable/SnackTable';
import Button from '@material-ui/core/Button';
import { purple } from '@material-ui/core/colors';
import EmployeeTable from './EmployeeTable/EmployeeTable';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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

const Dashboard = ({children}) => {

    const classes = useStyles();

    return (
        <div className={classes.root}>


            <Grid container spacing={1}>
                <Grid item xs={3} className={classes.sideGrid}>
                    <Paper className={classes.paper}>
                        <h2>Snacks Left: </h2>
                    </Paper>
                    <Button variant="contained" color="primary" className={classes.btn}>
                        Schedule Delivery!
                    </Button>
                </Grid>

                <Grid item xs={9} className={classes.table}>
                    {children}
                </Grid>

            </Grid>
        </div>
    );
};

export default Dashboard;