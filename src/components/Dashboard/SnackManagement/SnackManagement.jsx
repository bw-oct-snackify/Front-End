import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { SnackTable } from "../..";
import { purple } from "@material-ui/core/colors";
import SnackFilter from "../../SnackFilter/SnackFilter";

const useStyles = makeStyles(theme => ({
  
}));

const SnackManagement = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs={3}>           
            <SnackFilter />          
        </Grid>
        <Grid item xs={9} className={classes.table}>
          <SnackTable />
        </Grid>
      </Grid>
    </div>
  );
};

export default SnackManagement;
