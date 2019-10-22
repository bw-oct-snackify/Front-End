import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { SnackTable } from '../..';
import { purple } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    card: {
        width: "250px"
    },
    title: {
        margin: theme.spacing(4, 0, 2),
        textDecorationLine: "underline",
        textDecorationStyle: "solid",
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

const SnackManagement = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Card className={classes.card}>
                        <Typography variant="h6" className={classes.title}>
                            Snacks Left:
                            </Typography>
                        <List className={classes.listContainer}>
                            <ul >
                                <a href="Selected Snacks" className={classes.list}>Selected Snacks</a>
                                <a href="Suggested Snacks" className={classes.list}>Suggested Snacks</a>
                                <a href="View All Snacks" className={classes.list}>View All Snacks</a>
                            </ul>
                        </List>
                    </Card>
                </Grid>

                <Grid item xs={9} className={classes.table}>
                    <SnackTable />                  
                </Grid>
            </Grid>
        </div>

    );
}

export default SnackManagement;
