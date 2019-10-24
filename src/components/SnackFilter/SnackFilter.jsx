import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { purple } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { withStyles, makeStyles } from "@material-ui/core/styles";
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
    fontSize: "1.2rem"
  }
}));

const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    "&:hover": {
      backgroundColor: purple[700]
    }
  }
}))(Button);

const SnackFilter = ({ user }) => {
  const classes = useStyles();

  // console.log("Filter props", props);

  return (
    <div className={classes.box}>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          Snacks Left:
        </Typography>
        <br></br>
        <Typography>
          <Link to="/SelectedSnacks" className={classes.list}>
            Selected Snacks
          </Link>

          <Link to="/Suggested" className={classes.list}>
            Suggested Snacks
          </Link>

          <Link to="/Snacks" className={classes.list}>
            View All Snacks
          </Link>
        </Typography>
      </Paper>
      {user.admin && (
        <Link to="/cp/checkout">
          <ColorButton
            variant="contained"
            color="primary"
            className={classes.margin}
          >
            Schedule Delivery
          </ColorButton>
        </Link>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    user: state.dashboardReducer.user
  };
};

export default connect(
  mapStateToProps,
  {}
)(SnackFilter);