import React from "react";
import { Link } from "react-router-dom";
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
    flexDirection: "column"
  }
}));

const SnackFilter = () => {
  const classes = useStyles();
  return (
    <div className={classes.box}>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          SnackFilter
        </Typography>
        <Typography component="p">
          <ul>
            <Link to="Selected Snacks" className={classes.list}>
              Selected Snacks
            </Link>

            <Link to="Suggested Snacks" className={classes.list}>
              Suggested Snacks
            </Link>

            <Link to="View All Snacks" className={classes.list}>
              View All Snacks
            </Link>
          </ul>
        </Typography>
      </Paper>
    </div>
  );
};

export default SnackFilter;
