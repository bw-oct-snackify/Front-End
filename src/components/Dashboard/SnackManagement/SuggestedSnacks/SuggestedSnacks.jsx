import React from "react";
import SnackFilter from "../../../SnackFilter/SnackFilter";
import SnackCard from "../ViewAllSnacks/SnackCard";
import Grid from "@material-ui/core/Grid";

const SuggestedSnacks = () => {
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item sm={3}>
          <SnackFilter />
        </Grid>
        <Grid item sm={9}>
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
  );
};

export default SuggestedSnacks;
