import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  },
  list: {
    textDecoration: "none",
    color: "black",
    display: "flex",
    flexDirection: "column",
    fontSize:"1.2rem"
  }
}));

const SnackFilter = () => {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Snacks Left:
        </Typography>
        <br></br>
        <Typography component="p">
          <ul>
            <Link to="/SelectedSnacks" className={classes.list}>
              Selected Snacks
            </Link>

            <Link to="/Suggested" className={classes.list}>
              Suggested Snacks
            </Link>

            <Link to="/Snacks" className={classes.list}>
              View All Snacks
            </Link>
          </ul>
        </Typography>
      </Paper>
    </div>
  );
};

export default SnackFilter;
