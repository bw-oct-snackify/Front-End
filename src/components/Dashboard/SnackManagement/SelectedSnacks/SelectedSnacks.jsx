import React from "react";
import SnackFilter from "../../../SnackFilter/SnackFilter";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import SnackTable from "../SnackTable/SnackTable";

const useStyles = makeStyles(theme => ({
  
}));

const SelectedSnacks = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
     

      <Grid container spacing={1}>
        <Grid item sm={3}>
          <SnackFilter />
        </Grid>
        <Grid item sm={9}>         
          <SnackTable/>         
        </Grid>
      </Grid>

    </div>
  );
};

export default SelectedSnacks;
