import React from "react";
import SnackFilter from "../../../SnackFilter/SnackFilter";
import SnackCard from "../ViewAllSnacks/SnackCard";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
 
}));

const SuggestedSnacks = () => {
  const classes = useStyles();
  return (
    <div className={classes.list}>      
      <div className={classes.box}>
        <Grid container spacing={1}>
          <Grid item sm={3}>
            <SnackFilter />
          </Grid>
          <Grid item sm={9}>
            {/* <SearchComponent /> */}
            <br />
            <Grid container spacing={2}>
              <SnackCard />
              <SnackCard />
              <SnackCard />
              <SnackCard />
              <SnackCard />
              <SnackCard />
              <SnackCard />
              <SnackCard />
              <SnackCard />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default SuggestedSnacks;
