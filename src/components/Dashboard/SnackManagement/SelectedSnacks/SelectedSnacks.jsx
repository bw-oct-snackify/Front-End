import React from "react";
import SnackFilter from "../../../SnackFilter/SnackFilter";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import SnackTable from "../SnackTable/SnackTable";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    textDecoration: "none",
    color: "black",
   
  }
}));

const SelectedSnacks = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>        
        <Grid item xs={3}>
          <Paper className={classes.paper}><SnackFilter /></Paper>
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}><SnackTable/></Paper>
        </Grid>        
      </Grid>

    </div>
  );
};

export default SelectedSnacks;
